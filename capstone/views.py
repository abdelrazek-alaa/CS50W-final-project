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


class NavbarViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows navbar to be viewed
    """
    queryset = Navbar.objects.all()
    serializer_class = NavbarSerializer


class FooterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows footer to be viewed
    """
    queryset = Footer.objects.all()
    serializer_class = FooterSerializer


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


class DownloadSectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Download Section to be viewed and edited
    """
    queryset = DownloadSection.objects.all()
    serializer_class = DownloadSectionSerializer


class FaqSectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows FAQ Section to be viewed and edited
    """
    queryset = FaqSection.objects.all()
    serializer_class = FaqSectionSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Contact Section to be viewed 
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
