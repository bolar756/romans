from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
import secrets
from django.core.exceptions import ValidationError
from .paystack import Paystack 
User=get_user_model()
import uuid;
import datetime
# Create your models here.


        
class Profile(models.Model):
        user = models.ForeignKey(User,  on_delete=models.CASCADE)
        Id_means = models.CharField(default='NIN')
        userid= models.CharField(default=uuid.uuid4())
        id_no= models.IntegerField()
        email = models.EmailField()
        name= models.CharField(max_length=60,default='none')

        def meta(self):
                return self.name    
# Create your models here.
class UserWallet(models.Model):
    owner = models.CharField(max_length=200, default='marty')
    currency = models.CharField(max_length=50, default='NGN')
    balance = models.FloatField(max_length=220, default= 0.00)
    created_at = models.DateTimeField(default=timezone.now, null=True)

    def __str__(self):
        return self.owner.__str__()

class Points(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    value= models.IntegerField()
    last_run = models.DateTimeField(auto_now_add=True)

    def meta(self):
        return self.id , self.value
    
class Payment(models.Model):
    Payer = models.CharField(max_length=200, default='marty')
    amount = models.PositiveIntegerField()
    ref = models.CharField(max_length=200)
    email = models.EmailField()
    verified = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return f"Payment: {self.amount}"

    def save(self, *args, **kwargs):
        while not self.ref:
            ref = secrets.token_urlsafe(50)
            object_with_similar_ref = Payment.objects.filter(ref=ref)
            if not object_with_similar_ref:
                self.ref = ref

        super().save(*args, **kwargs)
        def amount_value(self):
          return int(self.amount) * 100

    def verify_payment(self):
       paystack = Paystack()  # Assuming Paystack is initialized correctly
       status, result = paystack.verify_payment(Payment.ref, Payment.amount)
       if status:  
        if result['amount'] / 100 == self.amount:  # Verify amount matches
            Payment.verified = True
            self.save()  # Save the updated object
            return True
        else:
            return False  # Return False if amount mismatch
       else:
        return False  

class useraccount(models.Model):
    account_number = models.CharField(default=uuid.uuid4() ,max_length=40)
    account_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # def validate (self):
    #     if useraccount.objects.filter(account_number = self.account_number).exists() or useraccount.objects.filter(account_owner= self.account_owner).exists():
    #         raise ValidationError({'account_number': 'Account with this number already exists.'})
  
    def clean(self):
        # Check for duplicate account numbers (already handled efficiently by unique=True)
        # This check is redundant due to unique=True, but I'm keeping it for demonstration:
        if self.pk is None and useraccount.objects.filter(account_number=self.account_number).exists():
            raise ValidationError({'account_number': 'Account with this number already exists.'})
        
        # Check if the user already has an account
        if self.pk is None and useraccount.objects.filter(account_owner=self.account_owner).exists():
            raise ValidationError({'account_owner': 'User already has an account.'})

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)


    def __str__(self):
        return str(self.account_number)  # Convert UUID to string
    
     
    class Meta:
        verbose_name = "User Account" # makes it look better in the admin
        verbose_name_plural = "User Accounts" # makes it look better in the admin


class DailyPoints(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    points = models.PositiveIntegerField(default=500, editable=False) # Unchangeable points

    def clean(self):
        if DailyPoints.objects.filter(owner=self.owner, date=self.date).exists():
            raise ValidationError("Daily points already awarded for today.")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.owner.username}'s points on {self.date}: {self.points}"

    class Meta:
        verbose_name = "Daily Points"
        verbose_name_plural = "Daily Points"
        unique_together = ('owner', 'date')
        ordering = ['-date']