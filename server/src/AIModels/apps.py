from django.apps import AppConfig
import numpy as np
from rest_framework.views import APIView, Response
import gensim.models.keyedvectors as word2vec
from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch
import re
import math
import nltk
import gensim
import numpy as np
from nltk.corpus import stopwords
from keras.layers import Embedding, LSTM, Dense, Dropout
from keras.models import Sequential, load_model
import keras.backend as K

class AimodelsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'AIModels'
    
    def response(data, error=""):
        return Response(dict(
        error=error,
        data=data,
    ))
    
    def get_model():
        """Define the model."""
        model = Sequential()
        model.add(LSTM(300, dropout=0.4, recurrent_dropout=0.4, input_shape=[1, 300], return_sequences=True))
        model.add(LSTM(64, recurrent_dropout=0.4))
        model.add(Dropout(0.5))
        model.add(Dense(1, activation='relu'))

        model.compile(loss='mean_squared_error', optimizer='rmsprop', metrics=['mae'])
        model.summary()

        return model
    def makeFeatureVec(words, model, num_features):
        """Make Feature Vector from the words list of an Essay."""
        featureVec = np.zeros((num_features,),dtype="float32")
        num_words = 0.
        
        print(gensim.__version__)
        index2word_set = set(model.wv.index2word)
        for word in words:
            if word in index2word_set:
                num_words += 1
                featureVec = np.add(featureVec,model[word])        
        featureVec = np.divide(featureVec,num_words)
        return featureVec
    def essay_to_wordlist(essay_v, remove_stopwords):
        """Remove the tagged labels and word tokenize the sentence."""
        essay_v = re.sub("[^a-zA-Z]", " ", essay_v)
        words = essay_v.lower().split()
        if remove_stopwords:
            stops = set(stopwords.words("english"))
            words = [w for w in words if not w in stops]
        return (words)
    def getAvgFeatureVecs(essays, model, num_features):
        """Main function to generate the word vectors for word2vec model."""
        counter = 0
        essayFeatureVecs = np.zeros((len(essays),num_features),dtype="float32")
        for essay in essays:
            essayFeatureVecs[counter] = makeFeatureVec(essay, model, num_features)
            counter = counter + 1
        return essayFeatureVecs
    def getPredictions(marking_scheme, answer, min_marks, max_marks):
        """Get Prediction from the model given a Question and an Answer"""
    
        num_features = 300
        if (len(answer) > 20):
            model = word2vec.KeyedVectors.load_word2vec_format("word2vecmodel.bin", binary=True)
            
            clean_test_essays = []
            clean_test_ms = []
            
            clean_test_essays.append(essay_to_wordlist(answer, remove_stopwords=True ))
            clean_test_ms.append(essay_to_wordlist(marking_scheme, remove_stopwords=True ))
            
            testDataVecs = getAvgFeatureVecs(clean_test_essays, model, num_features )
            
            
            testDataVecs2=np.ones(testDataVecs.shape)
            testDataVecs2 = getAvgFeatureVecs(clean_test_ms, model, num_features )
            testDataVecs+=testDataVecs2
            
            testDataVecs = np.array(testDataVecs)
            testDataVecs = np.reshape(testDataVecs, (testDataVecs.shape[0], 1, testDataVecs.shape[1]))

            lstm_model = load_model('lstm_ques_ms_2folds.h5')
            preds = lstm_model.predict(testDataVecs)

            if math.isnan(preds):
                preds = 0
            else:
                preds = np.around(preds)

            if preds < 0:
                preds = 0
            
            if preds > max_marks:
                preds = max_marks
            if preds < min_marks:
                preds = min_marks
        else:
            preds = 0
        
        return preds
        
    def predictAES(answer, marking_scheme):
        def get_model():
            """Define the model."""
            model = Sequential()
            model.add(LSTM(300, dropout=0.4, recurrent_dropout=0.4, input_shape=[1, 300], return_sequences=True))
            model.add(LSTM(64, recurrent_dropout=0.4))
            model.add(Dropout(0.5))
            model.add(Dense(1, activation='relu'))

            model.compile(loss='mean_squared_error', optimizer='rmsprop', metrics=['mae'])
            model.summary()

            return model
        def getPredictions(marking_scheme, answer, min_marks, max_marks):
            """Get Prediction from the model given a Question and an Answer"""
        
            num_features = 300
            if (len(answer) > 20):
                model = word2vec.KeyedVectors.load_word2vec_format("word2vecmodel.bin", binary=True)
                
                clean_test_essays = []
                clean_test_ms = []
                
                clean_test_essays.append(essay_to_wordlist(answer, remove_stopwords=True ))
                clean_test_ms.append(essay_to_wordlist(marking_scheme, remove_stopwords=True ))
                
                testDataVecs = getAvgFeatureVecs(clean_test_essays, model, num_features )
                
                
                testDataVecs2=np.ones(testDataVecs.shape)
                testDataVecs2 = getAvgFeatureVecs(clean_test_ms, model, num_features )
                testDataVecs+=testDataVecs2
                
                testDataVecs = np.array(testDataVecs)
                testDataVecs = np.reshape(testDataVecs, (testDataVecs.shape[0], 1, testDataVecs.shape[1]))

                lstm_model = load_model('lstm_ques_ms_2folds.h5')
                preds = lstm_model.predict(testDataVecs)

                if math.isnan(preds):
                    preds = 0
                else:
                    preds = np.around(preds)

                if preds < 0:
                    preds = 0
                
                if preds > max_marks:
                    preds = max_marks
                if preds < min_marks:
                    preds = min_marks
            else:
                preds = 0
            
            return preds
        model = get_model()
        model.load_weights('./src/AIModels/models/AES/lstm_ques_ms.h5')        
        marking_scheme = marking_scheme
        answer = answer
        min_marks = 0
        max_marks = 100

        
        print(answer)
        print(min_marks)
        print(max_marks)
    
        score = getPredictions(marking_scheme, answer, min_marks, max_marks)
        print('You scored:', score)

        return {"answer": answer}

    def predict(context, question):
        #Download the model and tokenizer
        #model = DistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased-distilled-squad')
        #tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased-distilled-squad')
        #model.save_pretrained('./AIModels/models/distilbert-base-uncased-distilled-squad/model/')
        #tokenizer.save_pretrained("./AIModels/models/distilbert-base-uncased-distilled-squad/tokenizer/")

        #Locally load the model and tokenizer
        model = DistilBertForQuestionAnswering.from_pretrained('./src/AIModels/models/distilbert-base-uncased-distilled-squad/model/')        
        tokenizer = DistilBertTokenizer.from_pretrained('./src/AIModels/models/distilbert-base-uncased-distilled-squad/tokenizer/')
        encoding = tokenizer.encode_plus(question, context)
        input_ids, attention_mask = encoding["input_ids"], encoding["attention_mask"]
        start_scores, end_scores = model(torch.tensor([input_ids]), attention_mask=torch.tensor([attention_mask]), return_dict=False)
        ans_tokens = input_ids[torch.argmax(start_scores) : torch.argmax(end_scores)+1]
        answer_tokens = tokenizer.convert_ids_to_tokens(ans_tokens , skip_special_tokens=True)
        answer= tokenizer.convert_tokens_to_string(answer_tokens)

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



