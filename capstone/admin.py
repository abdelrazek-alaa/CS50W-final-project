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


admin.site.register(NavLinks, NavLinksAdmin)
admin.site.register(Intro, IntroAdmin)
admin.site.register(Button, ButtonAdmin)
admin.site.register(FeatureSection, FeatureSectionAdmin)
admin.site.register(Feature, FeatureAdmin)
