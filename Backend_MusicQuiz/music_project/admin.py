from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Highscore, AddedSong, DefaultSong, UserProfile
admin.site.register(Highscore)
admin.site.register(AddedSong)
admin.site.register(DefaultSong)
admin.site.register(UserProfile)