from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, CourseSerializer
from .models import Todo, Course

# Create your views here.


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
