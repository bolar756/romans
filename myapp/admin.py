from django.contrib import admin

from .models import  useraccount, DailyPoints
# Register your models here.

admin.site.register(useraccount)
admin.site.register(DailyPoints)