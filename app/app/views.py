from django.shortcuts import render

def home(request):
    return render(request, 'home/index.html', {})

def about(request):
    return render(request, 'home/about.html', {})

def research(request):
    return render(request, 'home/research.html', {})