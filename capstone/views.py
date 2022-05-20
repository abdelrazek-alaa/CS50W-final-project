from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import *
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import navLinksSerializer

# Create your views here.


def index(request):
    return HttpResponse('<h1>TODO!</h1>')


class navLinksViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nav Links to be viewed
    """
    queryset = navLinks.objects.all()
    serializer_class = navLinksSerializer
    
