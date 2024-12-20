from django.shortcuts import render, redirect
from django.http import HttpResponse ,JsonResponse
from django.contrib import auth; from django.contrib.auth import login , logout, authenticate; 
from django.contrib.auth.decorators import login_required
import datetime , json, uuid
from .models import  DailyPoints,useraccount
from django.contrib import messages
from django.contrib.auth.models import User
from django.conf import settings
from .paystack import Paystack; 
from django.views.decorators.csrf import csrf_exempt



@login_required(login_url='login')
def profile(request):
    user = request.user
    if useraccount.objects.filter(account_owner = request.user).exists():
     useraccounts  = useraccount.objects.get(account_owner = request.user)
     return render(request, 'profile.html', context={"cont":useraccounts})

    else:
        users = useraccount.objects.create(account_number = uuid.uuid4() , account_owner= user)
        users.save()
        useraccounts  = useraccount.objects.get(account_owner = request.user)
        return render(request, 'profile.html', context={"cont":useraccounts})



@login_required(login_url='login')
def update_profile(request):
    user = request.user  # Get the current user
    useraza = useraccount.objects.get(account_owner = user)
    if request.method == 'POST':
        first_name = request.POST.get('fname')
        last_name = request.POST.get('lname')
        email = request.POST.get('email')
        aza = request.POST.get('aza')  # Assuming 'aza' is another field the nigerian slang for account number
        useraza.account_number= aza
        if user.email != email and User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists')
            return redirect('profile')  # Assuming 'profile' is the profile view name
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.save()
        useraza.save()
        messages.success(request, 'Profile updated successfully')
        return redirect('page')  # the page forb claiminmg daily points

    context = {'user': user}
    return render(request, 'update_profile.html', context)  # Assuming 'update_profile.html' is your template

def home(request):
    if request.user.is_authenticated:
      return redirect('page')
    else:
       return render(request,'index.html')


def signup(request):
    if request.method =="POST": 
       username = request.POST['name']
       email = request.POST['email']
       password1 = request.POST['password']
       password = request.POST['password1']
       if password==password and len(password) > 7:
           user = User.objects.create_user(username=username, email=email, password=password)
           user.save()
           user = authenticate( request, username=username, password=password)
           auth.login(request,user)
           if  user != None:
               auth.login(request,user)
               messages.info(request, f'welcome {request.user}')
               return redirect('home')
           else:
               messages.info(request, f'this user exists')
               return render(request,'login.html')
       else:
           messages.info(request, f'signup failed')
           return render(request,'signup.html')        
    else:       
       messages.info(request, f'signup failed')
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
          message = messages.success(request,'user or wrong password')
          return render(request,'signin.html')
    return render(request,'signin.html')
def logout(request):
    auth.logout(request)
    return redirect('/')

def contact(request):
   return render(request, 'contact.html')




def contact(request):
     return render(request, 'contact.html')

  


@login_required(login_url=login)
def  page(request):
     if DailyPoints.objects.filter(owner=request.user).exists():
         point = DailyPoints.objects.filter(owner= request.user)
         vale= (len(point)) * 500
         return render(request, 'page.html', context={'vale':vale, "point":point}) 
     else:
         vale=None
         point=None
         return render(request, 'page.html', context={'vale':vale, "point":point})
     

@login_required(login_url='login')
def createpoints(request):
    if request.method == "POST":
        user = request.user
        try:
           DailyPoints.objects.create(owner=user).save()
           messages.success(request, 'points can only be claimed once a day')
           return redirect('page')
        except Exception as e:
             messages.success(request, e)
             return redirect('page')
    else:
        messages.success(request, 'points can only be claimed once a day')
        return redirect('page')