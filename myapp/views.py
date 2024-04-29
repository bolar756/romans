from django.shortcuts import render, redirect
from django.contrib import auth; from django.contrib.auth import login , logout, authenticate; 
from django.contrib.auth.decorators import login_required
import datetime
from .models import PaymentInitialization
from django.contrib import messages;
from django.contrib.auth.models import User
# Create your views here.
def home(request):
    return render(request,'index.html')

def signup(request):
    if request.method=="POST":
       username= request.POST['username']
       password= request.POST['password']
       password1= request.POST['password1']
       if password== password1:
         if  len(password) > 8:
           deer = User.objects.create_user(username = username, email='',    password=password)
           deer.save()
           user = authenticate(request , username= username, email='', password=password)
           login(request) 
           messages.success(request,' ✔you have been logged in {}'.format(user))
           return redirect('home')
         else:
               messages.success(request,'password can not be less than 8')  
       else :
          messages.success(request,'password values are not the same')  
    return render(request,'signup.html')
def login(request):
    if request.method =="POST":
       username = request.POST['username']
       password= request.POST['password']
       user = authenticate(username=username, password=password)
       if user != None:
        message = messages.success(request,f'welcome {user.username}')
        auth.login(request,user)
        return redirect('/')
       else:
          message = messages.success(request,'loggin failed')
          return render(request,'signin.html')
    return render(request,'signin.html')
def logout(request):
    auth.logout(request)
    return redirect('/')
@login_required(login_url='login')
def profile(request):
    return render(request,'profile.html')

@login_required(login_url='login')
def payment(request):
   if request.method=="POST":
      price = request.POST['price']
      payment =PaymentInitialization.objects.create(price=price)
      payment.save()
      return redirect('/')