# Generated by Django 4.2.1 on 2024-12-18 23:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0011_alter_profile_userid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userid',
            field=models.CharField(default=uuid.UUID('e3456537-2d86-436d-8002-6b8ef95d0d42')),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='account_number',
            field=models.CharField(default=uuid.UUID('4cb5dd00-91c5-4c8c-a28d-2130aead6d2d'), max_length=40),
        ),
        migrations.CreateModel(
            name='DailyPoints',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('points', models.PositiveIntegerField(default=500, editable=False)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Daily Points',
                'verbose_name_plural': 'Daily Points',
                'ordering': ['-date'],
                'unique_together': {('owner', 'date')},
            },
        ),
    ]
