from django.urls import path
from .views import CustomerViewSet
from rest_framework.routers import DefaultRouter

app_name = 'customers'

router = DefaultRouter()
router.register(r'', CustomerViewSet)

urlpatterns = [
    # Eventuali ulteriori pattern se necessari
]

urlpatterns += router.urls