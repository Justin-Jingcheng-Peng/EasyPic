from django.shortcuts import render
from rest_framework import viewsets

from .models import UnsplashPhoto
from .serializers import PhotoSerializer

# Create your views here.


class PhotoView(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = UnsplashPhoto.objects.all()
