from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from .models import Contact
from .forms import ContactForm
import json

def list(request):
    if (request.method == "POST"):
        return create(request)
    else:
        form = ContactForm()
        contacts = Contact.objects.all()
        return render(request, 'contacts/index.html', {"contacts": contacts, "form": form})

def create(request):
    form = ContactForm(request.POST)
    if form.is_valid():
         Contact.objects.create(**form.cleaned_data)
         return  HttpResponseRedirect("/contacts")
    else:
        form = ContactForm()

    contacts = Contact.objects.all()
    return render(request, 'contacts/index.html', {"contacts": contacts, "form": form })
   

def update(request):
    body = json.loads(request.body.decode('utf-8'))
    contact = Contact.objects.filter(id=body['id'])

    del body['id']
    contact.update(**body)
    
    return HttpResponse("OK")

def delete(request):
    body = json.loads(request.body.decode('utf-8'))
    contact = Contact.objects.get(id=body['id'])
    contact.delete()
    
    return HttpResponse("OK")