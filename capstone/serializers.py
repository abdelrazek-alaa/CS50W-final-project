from .models import *
from rest_framework import serializers


class NavLinksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NavLinks
        fields = ['id', 'name', 'href', 'current']


class IntroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Intro
        fields = ['id', 'title', 'paragraph', 'chromeButton', 'firefoxButton']
