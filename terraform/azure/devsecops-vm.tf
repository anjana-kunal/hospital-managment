locals {
  devsecops_ports = {
    ssh           = 22
    jenkins       = 8080
    sonarqube     = 9000
    kibana        = 5601
    prometheus    = 9090
    grafana       = 3000
    elasticsearch = 9200
    logstash      = 5044
    trivy         = 4954
  }
}

resource "azurerm_network_security_group" "devsecops" {
  count = var.enable_devsecops_vm ? 1 : 0

  name                = "${local.name_prefix}-devsecops-nsg"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tags                = local.common_tags
}

resource "azurerm_network_security_rule" "devsecops_inbound" {
  for_each = var.enable_devsecops_vm ? local.devsecops_ports : {}

  name                        = "allow-${each.key}"
  priority                    = 100 + index(keys(local.devsecops_ports), each.key)
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = tostring(each.value)
  source_address_prefixes     = var.devsecops_allowed_source_cidrs
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.main.name
  network_security_group_name = azurerm_network_security_group.devsecops[0].name
}

resource "azurerm_subnet_network_security_group_association" "devsecops" {
  count = var.enable_devsecops_vm ? 1 : 0

  subnet_id                 = azurerm_subnet.devsecops[0].id
  network_security_group_id = azurerm_network_security_group.devsecops[0].id
}

resource "azurerm_public_ip" "devsecops" {
  count = var.enable_devsecops_vm ? 1 : 0

  name                = "${local.name_prefix}-devsecops-pip"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  allocation_method   = "Static"
  sku                 = "Standard"
  tags                = local.common_tags
}

resource "azurerm_network_interface" "devsecops" {
  count = var.enable_devsecops_vm ? 1 : 0

  name                = "${local.name_prefix}-devsecops-nic"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tags                = local.common_tags

  ip_configuration {
    name                          = "primary"
    subnet_id                     = azurerm_subnet.devsecops[0].id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.devsecops[0].id
  }
}

resource "azurerm_linux_virtual_machine" "devsecops" {
  count = var.enable_devsecops_vm ? 1 : 0

  name                = "${local.name_prefix}-devsecops-vm"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  size                = var.devsecops_vm_size
  admin_username      = var.devsecops_admin_username
  network_interface_ids = [
    azurerm_network_interface.devsecops[0].id
  ]
  custom_data = base64encode(templatefile("${path.module}/templates/devsecops-cloud-init.yaml.tftpl", {
    devsecops_admin_username = var.devsecops_admin_username
    grafana_admin_user     = var.grafana_admin_user
    grafana_admin_password = local.grafana_password
    sonarqube_db_password  = local.sonarqube_db_pass
  }))
  tags = local.common_tags

  admin_ssh_key {
    username   = var.devsecops_admin_username
    public_key = var.devsecops_admin_ssh_public_key
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Premium_LRS"
    disk_size_gb         = var.devsecops_os_disk_size_gb
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts-gen2"
    version   = "latest"
  }

  lifecycle {
    precondition {
      condition     = !var.enable_devsecops_vm || length(trimspace(var.devsecops_admin_ssh_public_key)) > 0
      error_message = "Set devsecops_admin_ssh_public_key in terraform.tfvars before creating the DevSecOps VM."
    }
  }
}

resource "azurerm_managed_disk" "devsecops_data" {
  count = var.enable_devsecops_vm ? 1 : 0

  name                 = "${local.name_prefix}-devsecops-data"
  location             = azurerm_resource_group.main.location
  resource_group_name  = azurerm_resource_group.main.name
  storage_account_type = var.devsecops_data_disk_sku
  create_option        = "Empty"
  disk_size_gb         = var.devsecops_data_disk_size_gb
  tags                 = local.common_tags
}

resource "azurerm_virtual_machine_data_disk_attachment" "devsecops_data" {
  count = var.enable_devsecops_vm ? 1 : 0

  managed_disk_id    = azurerm_managed_disk.devsecops_data[0].id
  virtual_machine_id = azurerm_linux_virtual_machine.devsecops[0].id
  lun                = 0
  caching            = "ReadWrite"
}
