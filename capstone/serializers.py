from .models import *
from rest_framework import serializers


class NavLinksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NavLinks
        fields = ['id', 'name', 'href', 'current']


class ButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Button
        fields = ['name', 'url', 'text']


class IntroSerializer(serializers.HyperlinkedModelSerializer):
    buttons = ButtonSerializer(many=True)

    class Meta:
        model = Intro
        fields = ['id', 'title', 'paragraph', 'buttons']
