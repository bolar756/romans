from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('contact', views.contact, name='contact'),
   path('initiate-payment/', views.initiate_payment, name='initiate_payment'),
    path('verify-payment/<str:ref>/', views.verify_payment, name='verify_payment'),
    ]
