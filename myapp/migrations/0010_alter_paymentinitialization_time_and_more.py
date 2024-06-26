# Generated by Django 4.2.1 on 2024-06-17 11:36

import datetime
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_alter_paymentinitialization_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentinitialization',
            name='time',
            field=models.CharField(default=datetime.datetime(2024, 6, 17, 12, 36, 13, 894971)),
        ),
        migrations.AlterField(
            model_name='paymentinitialization',
            name='transactionId',
            field=models.CharField(default=uuid.UUID('376f1158-68fb-481e-baab-edb99db9a63d')),
        ),
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('acfd4cd2-bcc9-4aa1-a534-e9c9de3007da')),
        ),
    ]
