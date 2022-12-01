from django.urls import path

from rest_framework.authtoken import views

from . import api
# from views import OutreactViewSet
app_name = 'core'

urlpatterns = [
    path('auth/login/', views.obtain_auth_token, name="login"),
    path('dashboard/course/create/', api.CreateCourseAPIView.as_view(),
         name="create-course-data"),
    path('dashboard/course/list/', api.ListCourseAPIView.as_view(),
         name="list-course-data"),
]
