# Generated by Django 4.2.1 on 2024-12-17 15:10

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_alter_profile_id_means_alter_profile_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('dccf930b-0f48-4e58-84e7-f825016d8910')),
        ),
    ]