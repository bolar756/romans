# Generated by Django 4.2.5 on 2024-01-08 10:59

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_alter_register_gdate_alter_register_regid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='gdate',
            field=models.CharField(default='Mon Jan  8 11:59:04 2024', max_length=255),
        ),
        migrations.AlterField(
            model_name='register',
            name='regid',
            field=models.CharField(default=uuid.UUID('0a6412d3-377c-4034-a36f-7e76cd83f9f4'), max_length=255),
        ),
    ]
