from django.db import models
from django.template.defaultfilters import slugify # new
from django.urls import reverse
from django.utils import timezone
from django_extensions.db.fields import AutoSlugField

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=50,default='')
    price = models.IntegerField(default=0)
    Category = models.CharField(max_length=100,default='')
    upload = models.ImageField(upload_to ='products/image') # Create your models here.
    #upload = models.FileField(blank=True)

    slug = AutoSlugField(populate_from='product_name')
    desciption =models.CharField(max_length=200,default='')

    def slugify_function(self, content):
        return content.replace(' ', '-').lower()

    def __str__(self):
         return self.product_name   

class ProductImage(models.Model):
      product = models.ForeignKey(Product, default=None, on_delete=models.CASCADE)
      images = models.FileField(upload_to = 'products/image')   