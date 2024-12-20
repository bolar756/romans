from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('contact', views.contact, name='contact'),
    path('page',views.page, name='page'),
    path('createpoints',views.createpoints, name='createpoints'),
    path('profile',  views.profile, name ='profile'),
    path('update_profile',  views.update_profile, name ='update_profile'),
    ]
