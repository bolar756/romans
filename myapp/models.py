from django.db import models
import uuid , time
# Create your models here.

class Register(models.Model):
    name = models.CharField(max_length=255, default='my_name')
    regid = models.CharField(max_length=255, default=uuid.uuid4())
    gdate = models.CharField(max_length=255, default=time.ctime())
    category = models.CharField(max_length=255,default='category')
    contact=models.CharField(max_length=255,default='contact')
    dofbirth = models.CharField(max_length=255,default='December 30 2004')
    size = models.IntegerField()

    class Meta:
        verbose_name_plural = 'Registers'
    def meta(self):
        return self.name