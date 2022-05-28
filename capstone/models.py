from django.db import models

# Create your models here.


class Navbar(models.Model):
    logo = models.FileField(upload_to='images/', null=True,
                            blank=True, default=None)
    logoMobile = models.FileField(upload_to='images/', null=True,
                                  blank=True, default=None)


class Footer(models.Model):
    logo = models.FileField(upload_to='images/', null=True,
                            blank=True, default=None)


class NavLinks(models.Model):
    navbar = models.ForeignKey(
        Navbar, on_delete=models.CASCADE, related_name='links')
    footer = models.ForeignKey(
        Footer, on_delete=models.CASCADE, related_name='links')
    name = models.CharField(max_length=48)
    href = models.URLField(default='https://www.google.com/')
    current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"


class Intro(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)
    img = models.FileField(upload_to='images/', null=True,
                           blank=True, default=None)

    def __str__(self):
        return f"{self.title}"


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


class DownloadSection(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.title}"


class Browser(models.Model):
    downloadSection = models.ForeignKey(
        DownloadSection, on_delete=models.CASCADE, related_name='browsers')
    name = models.CharField(max_length=48)
    title = models.CharField(max_length=48)
    minimumVersion = models.TextField(max_length=200)
    img = models.FileField(upload_to='images/', null=True,
                           blank=True, default=None)

    def __str__(self):
        return f"{self.name} : {self.title}"


class FaqSection(models.Model):
    title = models.CharField(max_length=48)
    paragraph = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.title}"


class Question(models.Model):
    faqSection = models.ForeignKey(
        FaqSection, on_delete=models.CASCADE, related_name='questions')
    question = models.CharField(max_length=150)
    answer = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.question}"


class Contact(models.Model):
    subscribers = models.CharField(max_length=48)
    heading = models.CharField(max_length=100)
    mainButtonText = models.CharField(max_length=48)

    def __str__(self):
        return f"{self.heading}"


class SocialLink(models.Model):
    footer = models.ForeignKey(
        Footer, on_delete=models.CASCADE, related_name='socialLinks')
    icon = models.FileField(upload_to='images/', null=True,
                            blank=True, default=None)

    url = models.URLField(default='https://www.google.com/')

    def __str__(self):
        return f"{self.url}"
