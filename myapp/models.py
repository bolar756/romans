from django.db import models
from django.contrib.auth import get_user_model
User=get_user_model()
import uuid;
import datetime
# Create your models here.

class PaymentInitialization(models.Model):
        creator = models.ForeignKey(User,  on_delete=models.CASCADE)
        price= models.IntegerField()
        time= models.CharField(default=datetime.datetime.now())
        transactionId= models.CharField(default=uuid.uuid4())
        status = models.CharField(default='success')

        def meta(self):
                return self.creator
        
class Profile(models.Model):
        user = models.ForeignKey(User,  on_delete=models.CASCADE)
        Id_means = models.CharField(default='NIN')
        userid= models.CharField(default=uuid.uuid4())
        id_no= models.IntegerField()
        email = models.EmailField()
        name= models.CharField(max_length=60,default='none')

        def meta(self):
                return self.name    
