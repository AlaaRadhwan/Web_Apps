from django.contrib import admin
from django.urls import include, path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.home_ar, name="home-ar"),
    path('home_en', views.home_en, name='home-en'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)