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


class FeatureSection(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.title} : {self.paragraph}"


class Feature(models.Model):
    featureSection = models.ForeignKey(
        FeatureSection, on_delete=models.CASCADE, related_name='features')
    name = models.CharField(max_length=48)
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)
    img = models.FileField(upload_to='images/', null=True,
                           blank=True, default=None)

    def __str__(self):
        return f"{self.name} : {self.title}"
