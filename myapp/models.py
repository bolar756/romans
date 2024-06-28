from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
import secrets
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
