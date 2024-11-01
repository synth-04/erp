from django.db import models

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

# Modello State
class State(models.Model):
    id_state = models.AutoField(primary_key=True)
    state = models.CharField(max_length=10, unique=True)

# Modello Invoice
class Invoice(models.Model):
    id_invoice = models.AutoField(primary_key=True)
    date = models.DateField()
    fk_customer = models.ForeignKey(Customer, on_delete=models.PROTECT, related_name='invoices')
    created = models.DateTimeField(auto_now_add=True)
    invoice_number = models.CharField(max_length=45, unique=True)
    fk_state = models.ForeignKey(State, on_delete=models.PROTECT)

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

# Modello AccountType
class AccountType(models.Model):
    id_account_type = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, unique=True)

# Modello Account
class Account(models.Model):
    id_account = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, unique=True)
    fk_type = models.ForeignKey(AccountType, on_delete=models.PROTECT)

# Modello InvoiceP (Dettagli della Fattura)
class InvoiceP(models.Model):
    id_invoice_p = models.AutoField(primary_key=True)
    fk_prod = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField()
    fk_invoice = models.ForeignKey(Invoice, on_delete=models.PROTECT, related_name='invoice_items', blank=True, null=True)
    fk_account = models.ForeignKey(Account, on_delete=models.PROTECT)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)

# Modello Payment
class Payment(models.Model):
    id_payment = models.AutoField(primary_key=True)
    date = models.DateField()
    type = models.CharField(max_length=45)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    fk_invoice = models.ForeignKey(Invoice, on_delete=models.PROTECT)
    state = models.CharField(max_length=45)
    fk_account = models.ForeignKey(Account, on_delete=models.PROTECT)

# Modello JournalEntry
class JournalEntry(models.Model):
    id_entry = models.AutoField(primary_key=True)
    date = models.DateField()
    description = models.TextField()
    fk_invoice = models.ForeignKey(Invoice, on_delete=models.SET_NULL, blank=True, null=True)

# Modello JournalEntryLine
class JournalEntryLine(models.Model):
    id_line = models.AutoField(primary_key=True)
    fk_entry = models.ForeignKey(JournalEntry, on_delete=models.CASCADE, related_name='lines')
    fk_account = models.ForeignKey(Account, on_delete=models.PROTECT)
    debit = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    credit = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def clean(self):
        # Trigger Check Logico per assicurare che uno tra debit o credit sia 0
        from django.core.exceptions import ValidationError
        if self.debit > 0 and self.credit > 0:
            raise ValidationError("Either debit or credit must be zero.")
        if self.debit == 0 and self.credit == 0:
            raise ValidationError("Either debit or credit must have a positive value.")


    


