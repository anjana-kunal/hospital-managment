variable "project" {
  description = "Short project name used in Azure resource names."
  type        = string
  default     = "medcore"
}

variable "subscription_id" {
  description = "Azure subscription ID. If null, the AzureRM provider uses ARM_SUBSCRIPTION_ID or Azure CLI context."
  type        = string
  default     = null
}

variable "environment" {
  description = "Environment name used in Azure resource names."
  type        = string
  default     = "dev"
}

variable "location" {
  description = "Azure region."
  type        = string
  default     = "eastus"
}

variable "resource_group_name" {
  description = "Optional existing/new resource group name. If null, Terraform creates one from project and environment."
  type        = string
  default     = null
}

variable "tags" {
  description = "Extra tags for Azure resources."
  type        = map(string)
  default     = {}
}

variable "vnet_address_space" {
  description = "Virtual network address space."
  type        = list(string)
  default     = ["10.42.0.0/16"]
}

variable "aks_subnet_address_prefixes" {
  description = "AKS subnet CIDR ranges."
  type        = list(string)
  default     = ["10.42.0.0/20"]
}

variable "postgres_subnet_address_prefixes" {
  description = "Private PostgreSQL subnet CIDR ranges."
  type        = list(string)
  default     = ["10.42.16.0/24"]
}

variable "devsecops_subnet_address_prefixes" {
  description = "DevSecOps VM subnet CIDR ranges."
  type        = list(string)
  default     = ["10.42.32.0/24"]
}

variable "aks_kubernetes_version" {
  description = "Optional AKS Kubernetes version. If null, Azure selects a default supported version."
  type        = string
  default     = null
}

variable "aks_node_count" {
  description = "Initial AKS node count."
  type        = number
  default     = 2
}

variable "aks_vm_size" {
  description = "AKS node VM size."
  type        = string
  default     = "Standard_B2s"
}

variable "acr_sku" {
  description = "Azure Container Registry SKU."
  type        = string
  default     = "Basic"
}

variable "postgres_version" {
  description = "Azure PostgreSQL Flexible Server version."
  type        = string
  default     = "16"
}

variable "postgres_sku_name" {
  description = "Azure PostgreSQL Flexible Server SKU."
  type        = string
  default     = "B_Standard_B1ms"
}

variable "postgres_storage_mb" {
  description = "Azure PostgreSQL storage in MB."
  type        = number
  default     = 32768
}

variable "postgres_backup_retention_days" {
  description = "Azure PostgreSQL backup retention in days."
  type        = number
  default     = 7
}

variable "postgres_admin_username" {
  description = "Azure PostgreSQL administrator username."
  type        = string
  default     = "medcoreadmin"
}

variable "postgres_admin_password" {
  description = "Optional Azure PostgreSQL administrator password. If null, Terraform generates one."
  type        = string
  default     = null
  sensitive   = true
}

variable "database_name" {
  description = "Application database name."
  type        = string
  default     = "medcore_health"
}

variable "kubernetes_namespace" {
  description = "Application Kubernetes namespace."
  type        = string
  default     = "medcore"
}

variable "deploy_application" {
  description = "Whether Terraform should deploy Kubernetes application resources."
  type        = bool
  default     = true
}

variable "run_migrations" {
  description = "Whether Terraform should create a Prisma migration Job."
  type        = bool
  default     = true
}

variable "backend_image_name" {
  description = "Backend image repository name in ACR."
  type        = string
  default     = "medcore-backend"
}

variable "frontend_image_name" {
  description = "Frontend image repository name in ACR."
  type        = string
  default     = "medcore-frontend"
}

variable "image_tag" {
  description = "Container image tag to deploy."
  type        = string
  default     = "latest"
}

variable "image_pull_policy" {
  description = "Kubernetes image pull policy."
  type        = string
  default     = "IfNotPresent"
}

variable "backend_replicas" {
  description = "Backend replicas per microservice."
  type        = number
  default     = 2
}

variable "frontend_replicas" {
  description = "Frontend replicas."
  type        = number
  default     = 2
}

variable "backend_max_replicas" {
  description = "Maximum backend HPA replicas."
  type        = number
  default     = 5
}

variable "frontend_max_replicas" {
  description = "Maximum frontend HPA replicas."
  type        = number
  default     = 4
}

variable "enable_hpa" {
  description = "Whether to create Kubernetes HorizontalPodAutoscalers."
  type        = bool
  default     = true
}

variable "hpa_cpu_average_utilization" {
  description = "HPA target CPU utilization percentage."
  type        = number
  default     = 70
}

variable "backend_cpu_request" {
  description = "Backend CPU request."
  type        = string
  default     = "100m"
}

variable "backend_memory_request" {
  description = "Backend memory request."
  type        = string
  default     = "256Mi"
}

variable "backend_cpu_limit" {
  description = "Backend CPU limit."
  type        = string
  default     = "500m"
}

variable "backend_memory_limit" {
  description = "Backend memory limit."
  type        = string
  default     = "512Mi"
}

variable "frontend_cpu_request" {
  description = "Frontend CPU request."
  type        = string
  default     = "50m"
}

variable "frontend_memory_request" {
  description = "Frontend memory request."
  type        = string
  default     = "128Mi"
}

variable "frontend_cpu_limit" {
  description = "Frontend CPU limit."
  type        = string
  default     = "250m"
}

variable "frontend_memory_limit" {
  description = "Frontend memory limit."
  type        = string
  default     = "256Mi"
}

variable "client_origin" {
  description = "Allowed browser origin for backend CORS. Use a real domain in production."
  type        = string
  default     = "*"
}

variable "jwt_secret" {
  description = "Optional JWT secret. If null, Terraform generates one."
  type        = string
  default     = null
  sensitive   = true
}

variable "jwt_expires_in" {
  description = "JWT expiration setting."
  type        = string
  default     = "7d"
}

variable "bcrypt_salt_rounds" {
  description = "bcrypt salt rounds."
  type        = number
  default     = 12
}

variable "stripe_secret_key" {
  description = "Stripe secret key."
  type        = string
  default     = ""
  sensitive   = true
}

variable "firebase_project_id" {
  description = "Firebase project ID."
  type        = string
  default     = ""
}

variable "firebase_client_email" {
  description = "Firebase client email."
  type        = string
  default     = ""
}

variable "firebase_private_key" {
  description = "Firebase private key."
  type        = string
  default     = ""
  sensitive   = true
}

variable "ingress_nginx_chart_version" {
  description = "ingress-nginx Helm chart version."
  type        = string
  default     = "4.11.3"
}

variable "ingress_annotations" {
  description = "Extra annotations for the application ingress."
  type        = map(string)
  default     = {}
}

variable "enable_argocd" {
  description = "Whether to install ArgoCD into AKS."
  type        = bool
  default     = true
}

variable "argocd_chart_version" {
  description = "ArgoCD Helm chart version."
  type        = string
  default     = "7.7.11"
}

variable "argocd_namespace" {
  description = "Kubernetes namespace for ArgoCD."
  type        = string
  default     = "argocd"
}

variable "enable_devsecops_vm" {
  description = "Whether to create the single DevSecOps VM for Jenkins, ELK, Prometheus, Grafana, Trivy, and SonarQube."
  type        = bool
  default     = true
}

variable "devsecops_vm_size" {
  description = "Azure VM size for the single DevSecOps tool server."
  type        = string
  default     = "Standard_D16s_v5"
}

variable "devsecops_admin_username" {
  description = "Admin username for the DevSecOps VM."
  type        = string
  default     = "azureuser"
}

variable "devsecops_admin_ssh_public_key" {
  description = "SSH public key used to access the DevSecOps VM."
  type        = string
  default     = ""
  sensitive   = true
}

variable "devsecops_allowed_source_cidrs" {
  description = "CIDR ranges allowed to access SSH and DevSecOps tool ports."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "devsecops_os_disk_size_gb" {
  description = "DevSecOps VM OS disk size."
  type        = number
  default     = 128
}

variable "devsecops_data_disk_size_gb" {
  description = "DevSecOps VM data disk size for Docker volumes, Elasticsearch, Jenkins, SonarQube, and Grafana."
  type        = number
  default     = 1024
}

variable "devsecops_data_disk_sku" {
  description = "DevSecOps VM data disk storage account type."
  type        = string
  default     = "Premium_LRS"
}

variable "grafana_admin_user" {
  description = "Grafana admin username."
  type        = string
  default     = "admin"
}

variable "grafana_admin_password" {
  description = "Optional Grafana admin password. If null, Terraform generates one."
  type        = string
  default     = null
  sensitive   = true
}

variable "sonarqube_postgres_password" {
  description = "Optional internal SonarQube PostgreSQL password. If null, Terraform generates one."
  type        = string
  default     = null
  sensitive   = true
}
