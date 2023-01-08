from django.urls import path

# from rest_framework.authtoken import views
from . import api

from django.contrib.auth import views as auth_views

app_name = 'core'

urlpatterns = [
#     path('users/', views.obtain_auth_token, name="login"),

    path('view/users/', api.UserViewSet.as_view({'get': 'list'}), name='users'),
    path('view/users/<int:pk>/get_user/', api.UserViewSet.as_view({'get': 'get_user'})),

    # Courses
    path('view/course/', api.CourseViewSet.as_view({'get': 'list'}), name='course'),
    path('view/course/<int:pk>/get_course/', api.CourseViewSet.as_view({'get': 'get_course'})),
    path('view/course/list_by_teacher/', api.CourseViewSet.as_view({'post': 'list_by_teacher'})),
    path('view/course/list_by_student/', api.CourseViewSet.as_view({'get': 'list_by_student'})),
    path('view/courses/<int:pk>/', api.CourseViewSet.as_view({'delete': 'destroy'}), name='course-delete'),

    path('signup/', api.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
]