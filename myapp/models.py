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

        def meta(self):
                return self.creator