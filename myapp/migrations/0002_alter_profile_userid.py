# Generated by Django 4.2.1 on 2024-09-04 19:39

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('2544a2d7-5ed4-4035-aadc-5ec4f318ab67'), max_length=1000),
        ),
    ]