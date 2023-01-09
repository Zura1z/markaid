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
    
class AES(models.Model):
    markingscheme = models.CharField(max_length=400)
    answer = models.CharField(max_length=1000000)

    def _getMarkingScheme(self):
        return self.markingscheme
    
    def _getAnwer(self):
        return self.answer
    
    def _getSelf(self):
        return [self.markingscheme, self.answer]