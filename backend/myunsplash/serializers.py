from rest_framework import serializers

from .models import UnsplashPhoto


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnsplashPhoto
        fields = ("id", "label", "photo_url")
