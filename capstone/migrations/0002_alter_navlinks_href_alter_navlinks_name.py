# Generated by Django 4.0.4 on 2022-05-20 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navlinks',
            name='href',
            field=models.TextField(default='#', max_length=100),
        ),
        migrations.AlterField(
            model_name='navlinks',
            name='name',
            field=models.TextField(max_length=48),
        ),
    ]
