# tunr/urls.py
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('userprofiles/', views.UserProfileList.as_view(), name='userProfile_list'),
    path('userprofiles/<int:pk>', views.UserProfileDetail.as_view(), name='userProfile_detail'),
]