from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Account, Course


class UserSerializer(serializers.ModelSerializer):
    """ User model Serializer """

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class AccountSerializer(serializers.ModelSerializer):
    """ Account model Serializer """

    class Meta:
        model = Account
        fields = ['id', 'username', 'email', 'platform']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'description', 'active', 'noOfStudents')