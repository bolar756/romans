# Generated by Django 4.2.1 on 2024-04-29 12:31

import datetime
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_alter_paymentinitialization_time_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('fe2c25ae-1a5e-4682-ab44-f1e11a5a05b1')),
        ),
        migrations.AlterField(
            model_name='paymentinitialization',
            name='time',
            field=models.CharField(default=datetime.datetime(2024, 4, 29, 13, 31, 43, 797861)),
        ),
        migrations.AlterField(
            model_name='paymentinitialization',
            name='transactionId',
            field=models.CharField(default=uuid.UUID('ec3b9c7d-fae6-4373-b7d6-db82a05d9e85')),
        ),
    ]
