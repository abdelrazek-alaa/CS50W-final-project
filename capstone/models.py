from django.db import models

# Create your models here.


class navLinks(models.Model):
    name = models.CharField(max_length=48)
    href = models.URLField(default='#')
    current = models.BooleanField(default=False)
