from django.shortcuts import render, redirect
from django.contrib import auth; from django.contrib.auth import login , logout, authenticate; 
from django.contrib.auth.decorators import login_required
import datetime
from .models import Profile, UserWallet, Payment
from django.contrib import messages
from django.contrib.auth.models import User
from django.conf import settings
from .paystack import Paystack; 
def home(request):
    if request.user.is_authenticated:
        wallet = UserWallet.objects.get(owner=request.user.email)
        return render(request,'cashout.html', context={'wallet':wallet})
    else:
       return render(request,'index.html')


def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password1 = request.POST['password1']
        if Payment.objects.filter(email=email).exists():
            if User.objects.filter(email=email).exists():
              messages.error(request, 'Email address already exists.')
              return render(request, 'signup.html')
            else:
              if (password == password1):
                user = User.objects.create_user(username=username, email=email , password=password)
                user.save()
                user = authenticate(request, username=username, password=password)
                auth.login(request,user)
                messages.success(request, 'You have been successfully registered and logged in!')
                return redirect('/')
              else:
                   messages.info(request, 'password are not of the same value')
                   return render(request, 'signup.html')
        else:
            return render(request, 'signup.html')      
    else:
        return render(request, 'signup.html')

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

def initiate_payment(request):
    if request.method == "POST":
        amount = request.POST['amount']
        email = request.POST['email']
        name = request.POST['name']

        pk = settings.PAYSTACK_PUBLIC_KEY

        payment = Payment.objects.create(amount=amount, email=email, Payer=name)
        payment.save()

        context = {
            'payment': payment,
            'field_values': request.POST,
            'paystack_pub_key': pk,
            'amount_value': payment.amount,
        }
        return render(request, 'make_payment.html', context)

    return render(request, 'payment.html')

def verify_payment(request, ref):
   payment = Payment.objects.get(ref=ref)
   verfif = Payment.verify_payment(self=payment)
   creator = payment.email
   try: 
        wallet = UserWallet.objects.get(owner=payment.email)
        wallet.balance += payment.amount
        wallet.save()
   except UserWallet.DoesNotExist:
          user_wallet = UserWallet.objects.create(owner=payment.email)
          user_wallet.balance = payment.amount
          user_wallet.save()
   return render(request, "success.html", context={'creator':creator})
