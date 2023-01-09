from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.forms import UserCreationForm

from .models import User, Course, Quiz, Question, Answer, LoginForm

from .serializers import UserSerializer, CourseSerializer, QuizSerializer, QuestionSerializer, AnswerSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    
    @action(methods=['get'], detail=True)
    def get_user(self, request, *args, **kwargs):
        user_id = kwargs['pk']
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def list(self, request):
        # Handle GET request to list courses
        courses = self.get_queryset()
        serializer = self.get_serializer(courses, many=True)
        return Response(serializer.data)

    @action(methods=['post'], detail=True)
    def create(self, request):
        # Get the teacher and student objects
        teacher = User.objects.get(pk=request.data['teacher'])

        # Create a new Course object with the teacher and students
        course = Course(title=request.data['title'], description=request.data['description'], teacher=teacher)
        course.save()

        serializer = CourseSerializer(course)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(methods=['get'], detail=True)
    def get_course(self, request, *args, **kwargs):
        course_id = kwargs['pk']
        course = Course.objects.get(pk=course_id)
        serializer = CourseSerializer(course)
        return Response(serializer.data)
    
    @action(methods=['post'], detail=False)
    def list_by_teacher(self, request, *args, **kwargs):
        teacher_id = int(request.data['teacher_id'])
        if teacher_id:
            courses = self.get_queryset().filter(teacher=teacher_id)
            serializer = self.get_serializer(courses, many=True)
            print(serializer.data)
            return Response(serializer.data)
        else:
            return Response({"error": "Teacher id is required."}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['get'], detail=False)
    def list_by_student(self, request, *args, **kwargs):
        student_id = request.query_params.get('student_id', None)
        if student_id:
            courses = self.get_queryset().filter(students=student_id)
            serializer = self.get_serializer(courses, many=True)
            return Response(serializer.data)
        else:
            return Response({"error": "Student id is required."}, status=status.HTTP_400_BAD_REQUEST)
    @action(methods=['delete'], detail=False)
    def destroy(self, request, *args, **kwargs):
        course = self.get_queryset().filter(id=kwargs['pk'])
        # course = self.get_object()
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    @action(methods=['post'], detail=False)
    def list_by_course(self, request, *args, **kwargs):
        course_id = request.data['course_id']
        
        if course_id:
            quizzes = self.get_queryset().filter(course=course_id)
            serializer = self.get_serializer(quizzes, many=True)
            print(serializer.data)
            return Response(serializer.data)
        else:
            return Response({"error": "Course id is required."}, status=status.HTTP_400_BAD_REQUEST)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def logout(request):
    logout(request)
    return redirect('login')
