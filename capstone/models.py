from django.db import models

# Create your models here.


class NavLinks(models.Model):
    name = models.CharField(max_length=48)
    href = models.URLField(default='#')
    current = models.BooleanField(default=False)


class Intro(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)
    chromeButton = models.CharField(max_length=25)
    firefoxButton = models.CharField(max_length=25)
