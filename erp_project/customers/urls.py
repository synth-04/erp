from django.urls import path
from .views import CustomerViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'customers'

router = DefaultRouter()
router.register(r'', CustomerViewSet)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Eventuali ulteriori pattern se necessari
]

urlpatterns += router.urls