resource "kubernetes_namespace_v1" "argocd" {
  count = var.deploy_application && var.enable_argocd ? 1 : 0

  metadata {
    name = var.argocd_namespace

    labels = {
      "app.kubernetes.io/name" = "argocd"
    }
  }
}

resource "helm_release" "argocd" {
  count = var.deploy_application && var.enable_argocd ? 1 : 0

  name       = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  version    = var.argocd_chart_version
  namespace  = kubernetes_namespace_v1.argocd[0].metadata[0].name

  set {
    name  = "server.service.type"
    value = "ClusterIP"
  }

  depends_on = [
    azurerm_kubernetes_cluster.aks
  ]
}
