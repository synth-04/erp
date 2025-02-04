from rest_framework import serializers
from .models import (
    Customer, State, Invoice, ProductCategory, Product, 
    AccountType, Account, InvoiceP, Payment, JournalEntry, JournalEntryLine
)

class CustomerSerializer(serializers.ModelSerializer):
    invoices = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'

class InvoiceSerializer(serializers.ModelSerializer):
    fk_customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    fk_state = serializers.PrimaryKeyRelatedField(queryset=State.objects.all())
    invoice_items = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Invoice
        fields = '__all__'

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    fk_cat = serializers.PrimaryKeyRelatedField(queryset=ProductCategory.objects.all())

    class Meta:
        model = Product
        fields = '__all__'

class AccountTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountType
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    fk_type = serializers.PrimaryKeyRelatedField(queryset=AccountType.objects.all())

    class Meta:
        model = Account
        fields = '__all__'

class InvoicePSerializer(serializers.ModelSerializer):
    fk_prod = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    fk_invoice = serializers.PrimaryKeyRelatedField(queryset=Invoice.objects.all(), allow_null=True)
    fk_account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())

    class Meta:
        model = InvoiceP
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    fk_invoice = serializers.PrimaryKeyRelatedField(queryset=Invoice.objects.all())
    fk_account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())

    class Meta:
        model = Payment
        fields = '__all__'

class JournalEntrySerializer(serializers.ModelSerializer):
    fk_invoice = serializers.PrimaryKeyRelatedField(queryset=Invoice.objects.all(), allow_null=True)
    lines = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = JournalEntry
        fields = '__all__'

class JournalEntryLineSerializer(serializers.ModelSerializer):
    fk_entry = serializers.PrimaryKeyRelatedField(queryset=JournalEntry.objects.all())
    fk_account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())

    class Meta:
        model = JournalEntryLine
        fields = '__all__'
