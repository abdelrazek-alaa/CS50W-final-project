# Generated by Django 4.0.4 on 2022-05-20 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0002_alter_navlinks_href_alter_navlinks_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navlinks',
            name='href',
            field=models.URLField(default='#'),
        ),
    ]
