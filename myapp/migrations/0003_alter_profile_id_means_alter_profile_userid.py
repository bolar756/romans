# Generated by Django 4.2.1 on 2024-12-17 15:03

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_alter_profile_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='Id_means',
            field=models.CharField(default='NIN'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('02ee6ddd-ae2e-4373-95df-ab53a66bb3a9')),
        ),
    ]
