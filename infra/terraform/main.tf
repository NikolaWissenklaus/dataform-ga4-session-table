provider "google" {
  project = var.project_id
  region  = var.region
}
#__________________________________________________________

module "bigquery" {
  source = "./modules/bigquery"
  project_id = var.project_id
  region = var.region
}