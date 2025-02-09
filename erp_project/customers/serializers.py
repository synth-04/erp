from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    invoices = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'