from django.db import models
from django import forms

class User(models.Model):
    # Fields for user model
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    is_teacher = models.BooleanField(default=False)

class Course(models.Model):
    # Fields for course model
    title = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses_teaching', limit_choices_to={'is_teacher': True})
    students = models.ManyToManyField(User, related_name='courses_enrolled', limit_choices_to={'is_teacher': False})

class Quiz(models.Model):
    # Fields for quiz model
    title = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='quizzes')

class Question(models.Model):
    # Fields for question model
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.TextField()
    # You could use a choices field to specify the different question types
    TYPE_CHOICES = (
        ('multiple_choice', 'Multiple Choice'),
        ('true_false', 'True/False'),
        ('short_answer', 'Short Answer'),
    )
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)

class Answer(models.Model):
    # Fields for answer model
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    text = models.TextField()
    is_correct = models.BooleanField()

class LoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)
