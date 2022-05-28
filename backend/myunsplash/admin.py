from django.contrib import admin

from .models import UnsplashPhoto

# Register your models here.


class UnsplashPhotoAdmin(admin.ModelAdmin):
    list_display = ("label", "photo_url")


admin.site.register(UnsplashPhoto, UnsplashPhotoAdmin)
