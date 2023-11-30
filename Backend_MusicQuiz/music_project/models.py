from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Highscore(models.Model):
    score = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.score
    
class DefaultSong(models.Model):
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    lyrics = models.CharField(max_length=4000)

    def __str__(self):
        return self.title
    
class AddedSong(models.Model):
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    lyrics = models.CharField(max_length=4000)

    def __str__(self):
        return self.title
    
class UserProfile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, unique=True)
    highscore = models.ForeignKey(Highscore, on_delete=models.CASCADE, related_name='users')
    default_songs = models.ForeignKey(DefaultSong, on_delete=models.CASCADE, related_name='users')
    added_songs = models.ForeignKey(AddedSong, on_delete=models.CASCADE, related_name='users')

    User.profile = property(lambda u: UserProfile.objects.get_or_create(user=u)[0])
    # https://www.turnkeylinux.org/blog/django-profile