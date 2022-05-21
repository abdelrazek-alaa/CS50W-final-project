from django.db import models

# Create your models here.


class NavLinks(models.Model):
    name = models.CharField(max_length=48)
    href = models.URLField(default='#')
    current = models.BooleanField(default=False)


class Intro(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.title} : {self.paragraph}"


class Button(models.Model):
    intro = models.ForeignKey(
        Intro, on_delete=models.CASCADE, related_name='buttons')
    name = models.CharField(max_length=48)
    url = models.URLField()
    text = models.CharField(max_length=48)

    def __str__(self):
        return f"{self.name}"
