from django.urls import path

# from rest_framework.authtoken import views
from . import api

from django.contrib.auth import views as auth_views

app_name = 'core'

urlpatterns = [
#     path('users/', views.obtain_auth_token, name="login"),
#     path('dashboard/course/', api.CreateCourseAPIView.as_view(),
#          name="create-course-data"),
     path('view/user/', api.UserViewSet.as_view({'get': 'list'}), name='user'),
     # path('api/view/course/', api.CourseViewSet.as_view({'get': 'list'}), name='course'),
     # path('api/view/quiz/', api.QuizViewSet.as_view(), name='quiz'),
     # path('api/view/question/', api.QuestionViewSet.as_view(), name='question'),
     # path('api/view/answer/', api.AnswerViewSet.as_view(), name='answer'),


     path('signup/', api.signup, name='signup'),
     path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
     path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
]