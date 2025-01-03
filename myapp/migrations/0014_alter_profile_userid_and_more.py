# Generated by Django 4.2.1 on 2024-12-20 12:14

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0013_alter_profile_userid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('30069856-699c-4a6c-843b-f24a015ebcae')),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='account_number',
            field=models.CharField(default=uuid.UUID('4f8925a8-886b-4621-878d-c4ce13a310e7'), max_length=40),
        ),
    ]
