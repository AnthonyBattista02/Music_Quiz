from rest_framework import serializers
from .models import UserProfile, DefaultSong, AddedSong

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    highscores = serializers.HyperlinkedRelatedField(
        view_name='user_highscore',
        many=True,
        read_only=True
    )
    defaultsongs = serializers.HyperlinkedRelatedField(
        view_name='default_songs',
        many=True,
        read_only=True
    )
    addedsongs = serializers.HyperlinkedRelatedField(
        view_name='added_songs',
        many=True,
        read_only=True
    )
    class Meta:
       model = UserProfile
       fields = ('highscores', 'defaultsongs', 'addedsongs')


class AddedSongSerializer(serializers.HyperlinkedModelSerializer):
    userProfiles = UserProfileSerializer(
        many=True,
        read_only=True
    )

    addedSong_url = serializers.ModelSerializer.serializer_url_field(
        view_name='addedSong_detail'
    )

    class Meta:
        model = AddedSong
        fields = ('title', 'genre', 'lyrics')


class DefaultSongSerializer(serializers.HyperlinkedModelSerializer):
    userProfiles = UserProfileSerializer(
        many=True,
        read_only=True
    )

    defaultSong_url = serializers.ModelSerializer.serializer_url_field(
        view_name='defaultSong_detail'
    )

    class Meta:
        model = DefaultSong
        fields = ('title', 'genre', 'lyrics')