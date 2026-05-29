resource "kubernetes_namespace_v1" "medcore" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name = var.kubernetes_namespace

    labels = {
      "app.kubernetes.io/name" = "medcore-health"
    }
  }
}

resource "kubernetes_namespace_v1" "ingress_nginx" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name = "ingress-nginx"

    labels = {
      "kubernetes.io/metadata.name" = "ingress-nginx"
    }
  }
}

resource "helm_release" "ingress_nginx" {
  count = var.deploy_application ? 1 : 0

  name       = "ingress-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  version    = var.ingress_nginx_chart_version
  namespace  = kubernetes_namespace_v1.ingress_nginx[0].metadata[0].name

  set {
    name  = "controller.service.annotations.service\\.beta\\.kubernetes\\.io/azure-load-balancer-health-probe-request-path"
    value = "/healthz"
  }

  depends_on = [
    azurerm_kubernetes_cluster.aks
  ]
}

resource "kubernetes_service_account_v1" "backend" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name      = "medcore-backend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  automount_service_account_token = false
}

resource "kubernetes_service_account_v1" "frontend" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name      = "medcore-frontend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  automount_service_account_token = false
}

resource "kubernetes_config_map_v1" "backend" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name      = "medcore-backend-config"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  data = {
    NODE_ENV           = "production"
    PORT               = "5000"
    CLIENT_ORIGIN      = var.client_origin
    JWT_EXPIRES_IN     = var.jwt_expires_in
    BCRYPT_SALT_ROUNDS = tostring(var.bcrypt_salt_rounds)
  }
}

resource "kubernetes_secret_v1" "medcore" {
  count = var.deploy_application ? 1 : 0

  metadata {
    name      = "medcore-secrets"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  data = {
    POSTGRES_DB           = var.database_name
    POSTGRES_USER         = var.postgres_admin_username
    POSTGRES_PASSWORD     = local.postgres_password
    DATABASE_URL          = local.database_url
    JWT_SECRET            = local.jwt_secret
    STRIPE_SECRET_KEY     = var.stripe_secret_key
    FIREBASE_PROJECT_ID   = var.firebase_project_id
    FIREBASE_CLIENT_EMAIL = var.firebase_client_email
    FIREBASE_PRIVATE_KEY  = var.firebase_private_key
  }

  type = "Opaque"
}

resource "kubernetes_deployment_v1" "backend" {
  for_each = var.deploy_application && var.enable_legacy_direct_deployment ? local.backend_services : {}

  metadata {
    name      = each.value.name
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name

    labels = {
      app                           = each.value.name
      "app.kubernetes.io/component" = "backend"
    }
  }

  spec {
    replicas = var.backend_replicas

    selector {
      match_labels = {
        app = each.value.name
      }
    }

    template {
      metadata {
        labels = {
          app                           = each.value.name
          "app.kubernetes.io/component" = "backend"
        }
      }

      spec {
        service_account_name = kubernetes_service_account_v1.backend[0].metadata[0].name

        container {
          name              = each.value.name
          image             = local.backend_image
          image_pull_policy = var.image_pull_policy

          port {
            container_port = 5000
          }

          env {
            name  = "MEDCORE_SERVICE"
            value = each.key
          }

          env_from {
            config_map_ref {
              name = kubernetes_config_map_v1.backend[0].metadata[0].name
            }
          }

          env_from {
            secret_ref {
              name = kubernetes_secret_v1.medcore[0].metadata[0].name
            }
          }

          readiness_probe {
            http_get {
              path = "/health"
              port = 5000
            }

            initial_delay_seconds = 10
            period_seconds        = 10
          }

          liveness_probe {
            http_get {
              path = "/health"
              port = 5000
            }

            initial_delay_seconds = 30
            period_seconds        = 20
          }

          security_context {
            allow_privilege_escalation = false
            run_as_non_root            = true

            capabilities {
              drop = ["ALL"]
            }
          }

          resources {
            requests = {
              cpu    = var.backend_cpu_request
              memory = var.backend_memory_request
            }

            limits = {
              cpu    = var.backend_cpu_limit
              memory = var.backend_memory_limit
            }
          }
        }
      }
    }
  }

  depends_on = [
    azurerm_role_assignment.aks_acr_pull,
    azurerm_postgresql_flexible_server_database.app,
    kubernetes_job_v1.migrate
  ]
}

resource "kubernetes_service_v1" "backend" {
  for_each = var.deploy_application && var.enable_legacy_direct_deployment ? local.backend_services : {}

  metadata {
    name      = each.value.name
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    selector = {
      app = each.value.name
    }

    port {
      name        = "http"
      port        = 5000
      target_port = 5000
    }
  }
}

resource "kubernetes_deployment_v1" "frontend" {
  count = var.deploy_application && var.enable_legacy_direct_deployment ? 1 : 0

  metadata {
    name      = "frontend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name

    labels = {
      app                           = "frontend"
      "app.kubernetes.io/component" = "frontend"
    }
  }

  spec {
    replicas = var.frontend_replicas

    selector {
      match_labels = {
        app = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app                           = "frontend"
          "app.kubernetes.io/component" = "frontend"
        }
      }

      spec {
        service_account_name = kubernetes_service_account_v1.frontend[0].metadata[0].name

        container {
          name              = "frontend"
          image             = local.frontend_image
          image_pull_policy = var.image_pull_policy

          port {
            container_port = 8080
          }

          readiness_probe {
            http_get {
              path = "/"
              port = 8080
            }

            initial_delay_seconds = 5
            period_seconds        = 10
          }

          liveness_probe {
            http_get {
              path = "/"
              port = 8080
            }

            initial_delay_seconds = 20
            period_seconds        = 20
          }

          security_context {
            allow_privilege_escalation = false
            run_as_non_root            = true

            capabilities {
              drop = ["ALL"]
            }
          }

          resources {
            requests = {
              cpu    = var.frontend_cpu_request
              memory = var.frontend_memory_request
            }

            limits = {
              cpu    = var.frontend_cpu_limit
              memory = var.frontend_memory_limit
            }
          }
        }
      }
    }
  }

  depends_on = [
    azurerm_role_assignment.aks_acr_pull
  ]
}

resource "kubernetes_service_v1" "frontend" {
  count = var.deploy_application && var.enable_legacy_direct_deployment ? 1 : 0

  metadata {
    name      = "frontend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    selector = {
      app = "frontend"
    }

    port {
      name        = "http"
      port        = 80
      target_port = 8080
    }
  }
}

resource "kubernetes_job_v1" "migrate" {
  count = var.deploy_application && var.enable_legacy_direct_deployment && var.run_migrations ? 1 : 0

  metadata {
    name      = "medcore-prisma-migrate"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    backoff_limit = 3

    template {
      metadata {
        labels = {
          app                           = "medcore-prisma-migrate"
          "app.kubernetes.io/component" = "backend"
        }
      }

      spec {
        restart_policy       = "OnFailure"
        service_account_name = kubernetes_service_account_v1.backend[0].metadata[0].name

        container {
          name              = "migrate"
          image             = local.backend_image
          image_pull_policy = var.image_pull_policy
          command           = ["npx", "prisma", "migrate", "deploy"]

          env_from {
            config_map_ref {
              name = kubernetes_config_map_v1.backend[0].metadata[0].name
            }
          }

          env_from {
            secret_ref {
              name = kubernetes_secret_v1.medcore[0].metadata[0].name
            }
          }
        }
      }
    }
  }

  wait_for_completion = true

  timeouts {
    create = "15m"
    update = "15m"
  }

  depends_on = [
    azurerm_role_assignment.aks_acr_pull,
    azurerm_postgresql_flexible_server_database.app
  ]
}

resource "kubernetes_ingress_v1" "medcore" {
  count = var.deploy_application && var.enable_legacy_direct_deployment ? 1 : 0

  metadata {
    name      = "medcore-ingress"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
    annotations = merge({
      "nginx.ingress.kubernetes.io/proxy-body-size" = "1m"
    }, var.ingress_annotations)
  }

  spec {
    ingress_class_name = "nginx"

    rule {
      http {
        dynamic "path" {
          for_each = local.ingress_paths

          content {
            path      = path.value.path
            path_type = "Prefix"

            backend {
              service {
                name = path.value.service

                port {
                  number = path.value.port
                }
              }
            }
          }
        }
      }
    }
  }

  depends_on = [
    helm_release.ingress_nginx,
    kubernetes_service_v1.backend,
    kubernetes_service_v1.frontend
  ]
}

resource "kubernetes_horizontal_pod_autoscaler_v2" "backend" {
  for_each = var.deploy_application && var.enable_legacy_direct_deployment && var.enable_hpa ? local.backend_services : {}

  metadata {
    name      = each.value.name
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    min_replicas = var.backend_replicas
    max_replicas = var.backend_max_replicas

    scale_target_ref {
      api_version = "apps/v1"
      kind        = "Deployment"
      name        = each.value.name
    }

    metric {
      type = "Resource"

      resource {
        name = "cpu"

        target {
          type                = "Utilization"
          average_utilization = var.hpa_cpu_average_utilization
        }
      }
    }
  }

  depends_on = [
    kubernetes_deployment_v1.backend
  ]
}

resource "kubernetes_horizontal_pod_autoscaler_v2" "frontend" {
  count = var.deploy_application && var.enable_legacy_direct_deployment && var.enable_hpa ? 1 : 0

  metadata {
    name      = "frontend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    min_replicas = var.frontend_replicas
    max_replicas = var.frontend_max_replicas

    scale_target_ref {
      api_version = "apps/v1"
      kind        = "Deployment"
      name        = "frontend"
    }

    metric {
      type = "Resource"

      resource {
        name = "cpu"

        target {
          type                = "Utilization"
          average_utilization = var.hpa_cpu_average_utilization
        }
      }
    }
  }

  depends_on = [
    kubernetes_deployment_v1.frontend
  ]
}

resource "kubernetes_network_policy_v1" "default_deny_ingress" {
  count = var.deploy_application && var.enable_legacy_direct_deployment ? 1 : 0

  metadata {
    name      = "default-deny-ingress"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    pod_selector {}
    policy_types = ["Ingress"]
  }
}

resource "kubernetes_network_policy_v1" "allow_ingress_to_app" {
  count = var.deploy_application && var.enable_legacy_direct_deployment ? 1 : 0

  metadata {
    name      = "allow-ingress-to-frontend-and-backend"
    namespace = kubernetes_namespace_v1.medcore[0].metadata[0].name
  }

  spec {
    pod_selector {
      match_expressions {
        key      = "app.kubernetes.io/component"
        operator = "In"
        values   = ["frontend", "backend"]
      }
    }

    policy_types = ["Ingress"]

    ingress {
      from {
        namespace_selector {
          match_labels = {
            "kubernetes.io/metadata.name" = kubernetes_namespace_v1.ingress_nginx[0].metadata[0].name
          }
        }
      }

      from {
        ip_block {
          cidr = "0.0.0.0/0"
        }
      }

      ports {
        protocol = "TCP"
        port     = "5000"
      }

      ports {
        protocol = "TCP"
        port     = "8080"
      }
    }
  }
}
