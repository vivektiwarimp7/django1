from django.shortcuts import render, get_object_or_404
from ecom.models import Product,ProductImage
from django.contrib.auth.models import User
# Create your views here.
def index(request):
	products =Product.objects.all()
	return render(request,"home.html",{'products':products})

def product_list(request):
    products = Product.objects.all()
    return render(request,"product_list.html",{'products':products})	

def product_detail(request,slug):
     product = Product.objects.get(slug=slug)
     productid =product.id   
     
     photos =  ProductImage.objects.filter(product=product)
     print(photos) 
     return render(request, 'product_detail.html', {'product': product,'photos':photos})	

def registration(request):
    
    return render(request,"Registration.html")