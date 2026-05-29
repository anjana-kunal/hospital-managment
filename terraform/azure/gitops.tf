resource "kubernetes_namespace_v1" "logging" {
  count = local.gitops_enabled && var.enable_devsecops_vm ? 1 : 0

  metadata {
    name = var.logging_namespace

    labels = {
      "kubernetes.io/metadata.name" = var.logging_namespace
    }
  }
}

resource "kubernetes_config_map_v1" "observability_targets" {
  count = local.gitops_enabled && var.enable_devsecops_vm ? 1 : 0

  metadata {
    name      = "medcore-observability-targets"
    namespace = kubernetes_namespace_v1.logging[0].metadata[0].name
  }

  data = {
    logstash_host = local.devsecops_private_ip
  }
}

resource "helm_release" "argocd_apps" {
  count = local.gitops_enabled ? 1 : 0

  name       = "argocd-apps"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argocd-apps"
  version    = var.argocd_apps_chart_version
  namespace  = var.argocd_namespace

  values = [
    yamlencode({
      projects = {
        medcore-platform = {
          namespace   = var.argocd_namespace
          description = "MedCore GitOps applications managed by ArgoCD."
          sourceRepos = [
            var.gitops_repo_url,
            "https://prometheus-community.github.io/helm-charts",
          ]
          destinations = [
            {
              namespace = var.kubernetes_namespace
              server    = "https://kubernetes.default.svc"
            },
            {
              namespace = var.logging_namespace
              server    = "https://kubernetes.default.svc"
            },
            {
              namespace = var.monitoring_namespace
              server    = "https://kubernetes.default.svc"
            },
          ]
          clusterResourceWhitelist = [
            {
              group = "*"
              kind  = "*"
            },
          ]
          namespaceResourceWhitelist = [
            {
              group = "*"
              kind  = "*"
            },
          ]
        }
      }
      applications = merge(
        {
          medcore = {
            namespace  = var.argocd_namespace
            project    = "medcore-platform"
            finalizers = ["resources-finalizer.argocd.argoproj.io"]
            source = {
              repoURL        = var.gitops_repo_url
              targetRevision = var.gitops_repo_revision
              path           = var.gitops_medcore_path
              kustomize = {
                images = [
                  "medcore-backend=${azurerm_container_registry.acr.login_server}/${var.backend_image_name}",
                  "medcore-frontend=${azurerm_container_registry.acr.login_server}/${var.frontend_image_name}",
                ]
              }
            }
            destination = {
              server    = "https://kubernetes.default.svc"
              namespace = var.kubernetes_namespace
            }
            syncPolicy = {
              automated = {
                prune    = true
                selfHeal = true
              }
              syncOptions = [
                "CreateNamespace=true",
                "ApplyOutOfSyncOnly=true",
              ]
            }
          }
          medcore-monitoring = {
            namespace  = var.argocd_namespace
            project    = "medcore-platform"
            finalizers = ["resources-finalizer.argocd.argoproj.io"]
            sources = [
              {
                repoURL        = "https://prometheus-community.github.io/helm-charts"
                chart          = "kube-prometheus-stack"
                targetRevision = var.kube_prometheus_stack_chart_version
                helm = {
                  releaseName = "kube-prometheus-stack"
                  valueFiles = [
                    "$values/${var.gitops_monitoring_values_path}",
                  ]
                  values = yamlencode({
                    prometheus = {
                      service = {
                        loadBalancerIP           = local.aks_prometheus_internal_lb_ip
                        loadBalancerSourceRanges = var.enable_devsecops_vm ? var.devsecops_subnet_address_prefixes : []
                      }
                    }
                  })
                }
              },
              {
                repoURL        = var.gitops_repo_url
                targetRevision = var.gitops_repo_revision
                ref            = "values"
              },
            ]
            destination = {
              server    = "https://kubernetes.default.svc"
              namespace = var.monitoring_namespace
            }
            syncPolicy = {
              automated = {
                prune    = true
                selfHeal = true
              }
              syncOptions = [
                "CreateNamespace=true",
                "ServerSideApply=true",
                "ApplyOutOfSyncOnly=true",
              ]
            }
          }
        },
        var.enable_devsecops_vm ? {
          medcore-logging = {
            namespace  = var.argocd_namespace
            project    = "medcore-platform"
            finalizers = ["resources-finalizer.argocd.argoproj.io"]
            source = {
              repoURL        = var.gitops_repo_url
              targetRevision = var.gitops_repo_revision
              path           = var.gitops_logging_path
            }
            destination = {
              server    = "https://kubernetes.default.svc"
              namespace = var.logging_namespace
            }
            syncPolicy = {
              automated = {
                prune    = true
                selfHeal = true
              }
              syncOptions = [
                "CreateNamespace=true",
                "ServerSideApply=true",
                "ApplyOutOfSyncOnly=true",
              ]
            }
          }
        } : {}
      )
    })
  ]

  depends_on = [
    helm_release.argocd,
    helm_release.ingress_nginx,
    kubernetes_config_map_v1.backend,
    kubernetes_secret_v1.medcore,
    kubernetes_service_account_v1.backend,
    kubernetes_service_account_v1.frontend,
    kubernetes_config_map_v1.observability_targets,
  ]
}
