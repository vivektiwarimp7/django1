# Generated by Django 3.1.1 on 2020-10-01 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0003_auto_20201001_1905'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='desciption',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(),
        ),
    ]