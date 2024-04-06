from django.shortcuts import render,redirect;
import time
from django.contrib import messages
from .models import Register
from django.contrib.auth import login, logout
# Create your views here.

def index(request):
    return render(request,'home.html')

# def register(request):
#     if request.method=="POST":
#        name=request.POST['name']
#        age = request.POST['age']
#        category = request.POST['category']
#        gender = request.POST['gender']
#        date= request.POST['date']
#        contact = request.POST['contact']
#        size = request.POST['size']
#        if name == "":
#            messages.info(request,"name is empty can't add empty name")

#        elif age == '':
#            messages.info(request,'amount is empty')

#        elif type(name) is int or complex:
#            messages.info(request,'name must not  be an integer')
#        else:  
#          try:   
#            obj=Register.objects.create(name=name,age=age,category=category,gender=gender,Date = date)
#            obj.save()
#            messages.info(request,'sucessful addition')
#          except Exception as e:
#                 messages.info(request,'there has being an error')

#        if ConnectionError:
#            messages.info(request,'connection error')
#            return redirect('/')
#        else :
#            messages.info(request,'there has being an error regarding your registration')
#     else:
#         return redirect('/')    
    
def evaluation(request):
    return render(request,'index.html')   

def register(request):
    return render(request,'register.html')   
def sell(request):
    return render(request,'sell.html')   


def login(request):
    return render(request,'login.html')   

def signup(request):
    return render(request,'register.html')   


def logout(request):
    return redirect('home')