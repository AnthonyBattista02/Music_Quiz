from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework import generics
from .serializers import UserProfileSerializer
from .models import UserProfile

# Create your views here.
@login_required
def view_foo(request):
    url = request.user.profile.url

class UserProfileList(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer