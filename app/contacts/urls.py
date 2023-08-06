from django.urls import path
from . import views

urlpatterns = [
    path("", views.list),
    path("/update", views.update),
    path("/delete", views.delete)
]