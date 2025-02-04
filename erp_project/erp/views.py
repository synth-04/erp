from django.shortcuts import render
from rest_framework import viewsets
from .models import (
    Customer, State, Invoice, ProductCategory, Product, 
    AccountType, Account, InvoiceP, Payment, JournalEntry, JournalEntryLine
)
from .serializers import (
    CustomerSerializer, StateSerializer, InvoiceSerializer, ProductCategorySerializer, 
    ProductSerializer, AccountTypeSerializer, AccountSerializer, InvoicePSerializer, 
    PaymentSerializer, JournalEntrySerializer, JournalEntryLineSerializer
)

# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')

# ViewSet per Customer
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

# ViewSet per State
class StateViewSet(viewsets.ModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer

# ViewSet per Invoice
class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

# ViewSet per ProductCategory
class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer

# ViewSet per Product
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# ViewSet per AccountType
class AccountTypeViewSet(viewsets.ModelViewSet):
    queryset = AccountType.objects.all()
    serializer_class = AccountTypeSerializer

# ViewSet per Account
class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

# ViewSet per InvoiceP
class InvoicePViewSet(viewsets.ModelViewSet):
    queryset = InvoiceP.objects.all()
    serializer_class = InvoicePSerializer

# ViewSet per Payment
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

# ViewSet per JournalEntry
class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer

# ViewSet per JournalEntryLine
class JournalEntryLineViewSet(viewsets.ModelViewSet):
    queryset = JournalEntryLine.objects.all()
    serializer_class = JournalEntryLineSerializer