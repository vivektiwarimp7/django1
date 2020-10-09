from django.contrib import admin
from django.urls import path,include
from . import views

from . import views
urlpatterns = [
    path('', views.index),
     path('products/', views.product_list, name='product_list'),
     path('products/<slug:slug>/', views.product_detail, name='product_detail'),
      path('registration', views.registration, name='registration'),
]
