from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CustomerSerializer
from .models import Customer

# Create your views here.

# ViewSet per Customer
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
