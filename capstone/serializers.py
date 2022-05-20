from .models import *
from rest_framework import serializers


class navLinksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = navLinks
        fields = ['id', 'name', 'href', 'current']
