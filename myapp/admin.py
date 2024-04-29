from django.contrib import admin

from .models import PaymentInitialization,Profile
# Register your models here.

admin.site.register(PaymentInitialization)
admin.site.register(Profile)