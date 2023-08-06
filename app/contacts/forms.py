from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Name", max_length=50)
    mobile = forms.CharField(label="Mobile", max_length=10)
    email = forms.EmailField(label="E-mail")
    address = forms.CharField(label="Address", max_length=500)