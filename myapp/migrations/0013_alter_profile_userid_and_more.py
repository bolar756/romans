# Generated by Django 4.2.1 on 2024-12-20 12:14

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0012_alter_profile_userid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('df75f37a-35d2-4bfb-be3a-bf054afd6c7a')),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='account_number',
            field=models.CharField(default=uuid.UUID('3413a78b-c93f-4532-8f68-a80b5f78df42'), max_length=40),
        ),
    ]
