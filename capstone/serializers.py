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


class BrowserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Browser
        fields = ['id', 'name', 'title', 'minimumVersion', 'img']


class DownloadSectionSerializer(serializers.HyperlinkedModelSerializer):
    browsers = BrowserSerializer(many=True)

    class Meta:
        model = DownloadSection
        fields = ['id', 'title', 'paragraph', 'browsers']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question', 'answer']


class FaqSectionSerializer(serializers.HyperlinkedModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = FaqSection
        fields = ['id', 'title', 'paragraph', 'questions']
