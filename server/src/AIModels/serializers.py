from rest_framework import serializers

from .models import QA

class QASerializer(serializers.ModelSerializer):
    class Meta:
        model = QA
        fields = ['id','question', 'context', 'answer']
        
class AES(serializers.ModelSerializer):
    class Meta:
        model = QA
        fields = ['id','marking_scheme', 'answer']