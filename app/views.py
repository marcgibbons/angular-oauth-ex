# Create your views here.
from rest_framework.generics import RetrieveAPIView
from rest_framework import serializers

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User


class LoginView(RetrieveAPIView):
    serializer = UserSerializer
    model = User

    def get_object(self):
        return self.request.user
