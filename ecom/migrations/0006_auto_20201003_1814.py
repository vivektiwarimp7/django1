# Generated by Django 3.1.1 on 2020-10-03 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0005_auto_20201003_1707'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(max_length=130, unique=True),
        ),
    ]