from django.db import models

# Create your models here.

# Modello Customer
class Customer(models.Model):
    id_customer = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    phone = models.CharField(max_length=45, blank=True, null=True)
    email = models.EmailField(max_length=45, blank=True, null=True)
    website = models.URLField(max_length=45, blank=True, null=True)
    cf = models.CharField(max_length=20, unique=True, blank=True, null=True)
    img = models.ImageField(upload_to='customer_images/', blank=True, null=True)
    address = models.CharField(max_length=45, blank=True, null=True)
    piva = models.CharField(max_length=20, unique=True, blank=True, null=True)


