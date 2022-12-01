from django.db import models

class Account(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Course(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    active = models.BooleanField(default=False)
    noOfStudents = models.IntegerField(default=0)

    def _str_(self):
        return self.title
    
    def create(title, active, noOfStudents, description):
        course = Course(title=title, active=active, noOfStudents=noOfStudents, description=description)
        course.save()
        return course
