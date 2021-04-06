from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, 'index.html')
def about(request):
    return render(request, 'acercaDe.html')
def statistics(request):
    return render(request, 'Statistics.html')
def stem(request):
    return render(request, 'porQueStem.html')
def aboutUs(request):
    return render(request, 'AboutUs.html')