from django.contrib import admin

from .models import *
# Register your models here.


class navLinksAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'href', 'current')


admin.site.register(navLinks, navLinksAdmin)
