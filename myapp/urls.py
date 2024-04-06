from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.index,name='index'),
    path('register', views.register, name='register'),
    path('login',views.login, name='login'),
    path('logout',views.logout,name='logout'),
    path('evaluation', views.evaluation, name='evaluation'),
    path('register',views.signup, name='register')
]