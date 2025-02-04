from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import (
    CustomerViewSet, StateViewSet, InvoiceViewSet, ProductCategoryViewSet, 
    ProductViewSet, AccountTypeViewSet, AccountViewSet, InvoicePViewSet, 
    PaymentViewSet, JournalEntryViewSet, JournalEntryLineViewSet
)

# Inizializza il router
router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'states', StateViewSet)
router.register(r'invoices', InvoiceViewSet)
router.register(r'product-categories', ProductCategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'account-types', AccountTypeViewSet)
router.register(r'accounts', AccountViewSet)
router.register(r'invoice-items', InvoicePViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'journal-entries', JournalEntryViewSet)
router.register(r'journal-entry-lines', JournalEntryLineViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),
]
