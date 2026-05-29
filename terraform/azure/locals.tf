resource "random_string" "suffix" {
  length  = 6
  lower   = true
  numeric = true
  special = false
  upper   = false
}

resource "random_password" "postgres_admin_password" {
  count   = var.postgres_admin_password == null ? 1 : 0
  length  = 24
  special = false
}

resource "random_password" "jwt_secret" {
  count   = var.jwt_secret == null ? 1 : 0
  length  = 48
  special = true
}

resource "random_password" "grafana_admin_password" {
  count   = var.grafana_admin_password == null ? 1 : 0
  length  = 24
  special = false
}

resource "random_password" "sonarqube_postgres_password" {
  count   = var.sonarqube_postgres_password == null ? 1 : 0
  length  = 24
  special = false
}

locals {
  name_prefix                   = lower("${var.project}-${var.environment}")
  compact_name_prefix           = replace(local.name_prefix, "-", "")
  resource_group_name           = coalesce(var.resource_group_name, "${local.name_prefix}-rg")
  acr_name                      = substr("${local.compact_name_prefix}${random_string.suffix.result}", 0, 50)
  postgres_name                 = substr("${local.name_prefix}-psql-${random_string.suffix.result}", 0, 63)
  aks_name                      = substr("${local.name_prefix}-aks", 0, 63)
  vnet_name                     = "${local.name_prefix}-vnet"
  devsecops_private_ip          = cidrhost(var.devsecops_subnet_address_prefixes[0], 10)
  aks_prometheus_internal_lb_ip = coalesce(var.aks_prometheus_internal_lb_ip, cidrhost(var.aks_subnet_address_prefixes[0], 20))
  gitops_enabled                = var.deploy_application && var.enable_argocd
  postgres_password             = coalesce(var.postgres_admin_password, try(random_password.postgres_admin_password[0].result, null))
  jwt_secret                    = coalesce(var.jwt_secret, try(random_password.jwt_secret[0].result, null))
  grafana_password              = coalesce(var.grafana_admin_password, try(random_password.grafana_admin_password[0].result, null))
  sonarqube_db_pass             = coalesce(var.sonarqube_postgres_password, try(random_password.sonarqube_postgres_password[0].result, null))
  database_url                  = "postgresql://${var.postgres_admin_username}:${urlencode(local.postgres_password)}@${azurerm_postgresql_flexible_server.postgres.fqdn}:5432/${var.database_name}?schema=public&sslmode=require"
  backend_image                 = "${azurerm_container_registry.acr.login_server}/${var.backend_image_name}:${var.image_tag}"
  frontend_image                = "${azurerm_container_registry.acr.login_server}/${var.frontend_image_name}:${var.image_tag}"

  common_tags = merge({
    project     = var.project
    environment = var.environment
    managed_by  = "terraform"
  }, var.tags)

  backend_services = {
    auth = {
      name = "auth-service"
    }
    admin = {
      name = "admin-service"
    }
    patient = {
      name = "patient-service"
    }
    doctor = {
      name = "doctor-service"
    }
    appointment = {
      name = "appointment-service"
    }
    clinical = {
      name = "clinical-service"
    }
    payment = {
      name = "payment-service"
    }
    operations = {
      name = "operations-service"
    }
    communication = {
      name = "communication-service"
    }
  }

  ingress_paths = [
    { path = "/api/v1/auth", service = "auth-service", port = 5000 },
    { path = "/api/v1/users", service = "admin-service", port = 5000 },
    { path = "/api/v1/dashboard", service = "admin-service", port = 5000 },
    { path = "/api/v1/audit-logs", service = "admin-service", port = 5000 },
    { path = "/api/v1/settings", service = "admin-service", port = 5000 },
    { path = "/api/v1/patients", service = "patient-service", port = 5000 },
    { path = "/api/v1/doctors", service = "doctor-service", port = 5000 },
    { path = "/api/v1/departments", service = "doctor-service", port = 5000 },
    { path = "/api/v1/schedule-slots", service = "doctor-service", port = 5000 },
    { path = "/api/v1/appointments", service = "appointment-service", port = 5000 },
    { path = "/api/v1/medical", service = "clinical-service", port = 5000 },
    { path = "/api/v1/lab", service = "clinical-service", port = 5000 },
    { path = "/api/v1/billing", service = "payment-service", port = 5000 },
    { path = "/api/v1/stripe", service = "payment-service", port = 5000 },
    { path = "/api/v1/facility", service = "operations-service", port = 5000 },
    { path = "/api/v1/pharmacy", service = "operations-service", port = 5000 },
    { path = "/api/v1/communication", service = "communication-service", port = 5000 },
    { path = "/", service = "frontend", port = 80 }
  ]
}
