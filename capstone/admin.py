from django.contrib import admin

from .models import *
# Register your models here.


class NavLinksAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'href', 'current')


class IntroAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'paragraph')


class ButtonAdmin(admin.ModelAdmin):
    list_display = ('id', 'url', 'text')


class FeatureSectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'paragraph')


class FeatureAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'title', 'paragraph', 'img')


class DownloadAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'paragraph')


class BrowserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'title', 'minimumVersion', 'img')


class FaqSectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'paragraph')


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'answer')


class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'subscribers', 'heading', 'mainButtonText')


class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('id', 'icon', 'url')


class NavbarAdmin(admin.ModelAdmin):
    list_display = ('id', 'logo')


class FooterAdmin(admin.ModelAdmin):
    list_display = ('id', 'logo')


admin.site.register(NavLinks, NavLinksAdmin)
admin.site.register(Intro, IntroAdmin)
admin.site.register(Button, ButtonAdmin)
admin.site.register(FeatureSection, FeatureSectionAdmin)
admin.site.register(Feature, FeatureAdmin)
admin.site.register(DownloadSection, DownloadAdmin)
admin.site.register(Browser, BrowserAdmin)
admin.site.register(FaqSection, FaqSectionAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(SocialLink, SocialLinkAdmin)
admin.site.register(Navbar, NavbarAdmin)
admin.site.register(Footer, FooterAdmin)
