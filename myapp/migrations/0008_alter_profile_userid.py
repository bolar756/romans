# Generated by Django 4.2.1 on 2024-12-17 15:22

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_alter_profile_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('3526da5c-cae1-4f1f-8b86-514596c0dc10')),
        ),
    ]
