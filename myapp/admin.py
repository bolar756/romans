from django.contrib import admin

from .models import Profile, Payment , UserWallet , Points
# Register your models here.

admin.site.register(Profile)
admin.site.register(UserWallet)
admin.site.register(Payment)
admin.site.register(Points)