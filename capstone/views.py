from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import *
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *

# Create your views here.


def index(request):
    return HttpResponse('<h1>TODO!</h1>')


class NavLinksViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nav Links to be viewed
    """
    queryset = NavLinks.objects.all()
    serializer_class = NavLinksSerializer


class IntroViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Intro Section to be viewed and edited
    """
    queryset = Intro.objects.all()
    serializer_class = IntroSerializer


class FeatureSectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Feature Section to be viewed and edited
    """
    queryset = FeatureSection.objects.all()
    serializer_class = FeatureSectionSerializer
