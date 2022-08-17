import imp
from urllib import request
from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse
from django.shortcuts import redirect, render

# Create your views here.

def home_ar(request):
    return render(request, "all_yemeni_app/home_ar.html")

def home_en(request):
    return render(request, 'all_yemeni_app/home_en.html')
