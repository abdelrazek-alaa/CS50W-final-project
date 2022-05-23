from .models import *
from rest_framework import serializers


class NavLinksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NavLinks
        fields = ['id', 'name', 'href', 'current']


class ButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Button
        fields = ['id', 'name', 'url', 'text']


class IntroSerializer(serializers.HyperlinkedModelSerializer):
    buttons = ButtonSerializer(many=True)

    class Meta:
        model = Intro
        fields = ['id', 'title', 'paragraph', 'buttons']


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ['id', 'name', 'title', 'paragraph', 'img']


class FeatureSectionSerializer(serializers.HyperlinkedModelSerializer):
    features = FeatureSerializer(many=True)

    class Meta:
        model = FeatureSection
        fields = ['id', 'title', 'paragraph', 'features']
