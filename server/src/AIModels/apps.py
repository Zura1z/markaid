from django.apps import AppConfig

from rest_framework.views import APIView, Response

from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

# from .serializers import QASerializer
# from .models import QA


# from fast_bert.prediction import BertClassificationPredictor

def response(data, error=""):
    return Response(dict(
        error=error,
        data=data,
    ))

# serializer_class = QASerializer

class AimodelsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'AIModels'

    # tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased',return_token_type_ids = True)
    # model = DistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased-distilled-squad')

    

    def predict(context, question):
        model = DistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased-distilled-squad')
        tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased-distilled-squad')
        encoding = tokenizer.encode_plus(question, context)
        input_ids, attention_mask = encoding["input_ids"], encoding["attention_mask"]
        start_scores, end_scores = model(torch.tensor([input_ids]), attention_mask=torch.tensor([attention_mask]), return_dict=False)
        ans_tokens = input_ids[torch.argmax(start_scores) : torch.argmax(end_scores)+1]
        answer_tokens = tokenizer.convert_ids_to_tokens(ans_tokens , skip_special_tokens=True)
        answer= tokenizer.convert_tokens_to_string(answer_tokens)

        # qamodel = QA.create(question=question, context=context, answer=answer)
        # return answer
        return {"answer": answer}


# class AIModel:
#     def __init__(self, model_name, model_path, label_path):
#         self.model_name = model_name
#         self.model_path = model_path
#         self.label_path = label_path
#         self.predictor = BertClassificationPredictor(
#             model_path=model_path,
#             label_path=label_path,
#             multi_label=False,
#             model_type='bert',
#             do_lower_case=False
#         )

#     def predict(self, text):
#         return self.predictor.predict(text)

# class AimodelsConfig(AppConfig):
#     name = 'fastbert'
#     MODEL_PATH = Path("model")
#     BERT_PRETRAINED_PATH = Path("model/uncased_L-12_H-768_A-12/")
#     LABEL_PATH = Path("label/")
#     predictor = BertClassificationPredictor(model_path = MODEL_PATH/"multilabel-emotion-fastbert-basic.bin", 
#                                             pretrained_path = BERT_PRETRAINED_PATH, 
#                                             label_path = LABEL_PATH, multi_label=True)  



