from django.shortcuts import render

def list(request):
    return render(request, 'contacts/index.html', {})

def create():
    pass

def update():
    pass

def delete():
    pass