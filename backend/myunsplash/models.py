from django.db import models


# Create your models here.
class UnsplashPhoto(models.Model):
    label = models.TextField()
    photo_url = models.URLField()

    def __str__(self) -> str:
        return f"Label: {self.label} URL: {self.photo_url}"
