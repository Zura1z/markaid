from django.db import models

# Create your models here.
class QA(models.Model):
    question = models.CharField(max_length=2000)
    context = models.CharField(max_length=2000)
    answer = models.CharField(max_length=2000)
    def __str__(self):
        return self.question

    def create(self, validated_data):
        return QA.objects.create(**validated_data)