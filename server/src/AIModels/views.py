# from django.shortcuts import render
# from .apps import WebappConfig 

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .apps import AimodelsConfig
class call_model(APIView):

    def get(self,request, format=None):
        model_data = request.data
        print(model_data)
        if request.method == 'GET':
            
            # sentence is the query we want to get the prediction for
            context =  model_data['context']
            question =  model_data['question']
            
            # predict method used to get the prediction
            response = AimodelsConfig.predict(context=context,question=question)
            
            # returning JSON response
            return JsonResponse(response)