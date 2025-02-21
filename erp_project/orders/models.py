from django.db import models
from customers.models import Customer

class Order(models.Model):
    STATUS_PENDING = 'P'
    STATUS_PROCESSING = 'PR'
    STATUS_SHIPPED = 'S'
    STATUS_COMPLETED = 'C'
    STATUS_CANCELLED = 'X'

    ORDER_STATUS_CHOICES = [
        (STATUS_PENDING, 'In attesa'),
        (STATUS_PROCESSING, 'In lavorazione'),
        (STATUS_SHIPPED, 'Spedito'),
        (STATUS_COMPLETED, 'Completato'),
        (STATUS_CANCELLED, 'Annullato'),
    ]

    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING, related_name='orders')
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=2,
        choices=ORDER_STATUS_CHOICES,
        default=STATUS_PENDING
    )
    total = models.DecimalField(max_digits=10, decimal_places=2)



