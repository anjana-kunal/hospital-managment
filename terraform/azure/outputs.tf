output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

output "aks_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "acr_name" {
  value = azurerm_container_registry.acr.name
}

output "acr_login_server" {
  value = azurerm_container_registry.acr.login_server
}

output "postgres_fqdn" {
  value = azurerm_postgresql_flexible_server.postgres.fqdn
}

output "backend_image" {
  value = local.backend_image
}

output "frontend_image" {
  value = local.frontend_image
}

output "get_credentials_command" {
  value = "az aks get-credentials --resource-group ${azurerm_resource_group.main.name} --name ${azurerm_kubernetes_cluster.aks.name}"
}

output "acr_login_command" {
  value = "az acr login --name ${azurerm_container_registry.acr.name}"
}

output "ingress_public_ip_command" {
  value = "kubectl get service ingress-nginx-controller --namespace ingress-nginx"
}

output "devsecops_vm_public_ip" {
  value = try(azurerm_public_ip.devsecops[0].ip_address, null)
}

output "devsecops_vm_ssh_command" {
  value = var.enable_devsecops_vm ? "ssh ${var.devsecops_admin_username}@${azurerm_public_ip.devsecops[0].ip_address}" : null
}

output "jenkins_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:8080" : null
}

output "sonarqube_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:9000" : null
}

output "kibana_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:5601" : null
}

output "prometheus_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:9090" : null
}

output "grafana_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:3000" : null
}

output "grafana_admin_password" {
  value     = var.enable_devsecops_vm ? local.grafana_password : null
  sensitive = true
}

output "elasticsearch_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:9200" : null
}

output "trivy_server_url" {
  value = var.enable_devsecops_vm ? "http://${azurerm_public_ip.devsecops[0].ip_address}:4954" : null
}

output "jenkins_initial_password_command" {
  value = var.enable_devsecops_vm ? "ssh ${var.devsecops_admin_username}@${azurerm_public_ip.devsecops[0].ip_address} 'sudo docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword'" : null
}

output "argocd_port_forward_command" {
  value = var.enable_argocd ? "kubectl port-forward svc/argocd-server -n ${var.argocd_namespace} 8088:443" : null
}

output "argocd_initial_admin_password_command" {
  value = var.enable_argocd ? "kubectl -n ${var.argocd_namespace} get secret argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d" : null
}

output "gitops_repo_url" {
  value = local.gitops_enabled ? var.gitops_repo_url : null
}

output "aks_prometheus_internal_lb_ip" {
  value = local.gitops_enabled ? local.aks_prometheus_internal_lb_ip : null
}

output "logstash_private_endpoint" {
  value = var.enable_devsecops_vm ? "${local.devsecops_private_ip}:5044" : null
}
