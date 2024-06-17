from django.contrib import admin

from .models import PaymentInitialization,Profile, Payment , UserWallet
# Register your models here.

admin.site.register(PaymentInitialization)
admin.site.register(Profile)
admin.site.register(UserWallet)
admin.site.register(Payment)