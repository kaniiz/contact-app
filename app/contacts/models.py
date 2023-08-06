from django.db import models

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(unique=True, max_length=50)
    mobile = models.CharField(max_length=10)
    email = models.EmailField()
    address = models.TextField()
