from django.db import models

# Create your models here.

# Modello ProductCategory
class ProductCategory(models.Model):
    id_cat = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)

# Modello Product
class Product(models.Model):
    id_product = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sales_tax = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    pur_tax = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    fk_cat = models.ForeignKey(ProductCategory, on_delete=models.PROTECT)