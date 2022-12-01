from django.conf import settings

from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated

from .serializers import CourseSerializer
from .models import Course


def sanitize_string(s):
    return s.strip().lower()

def response(data, error=""):
    return Response(dict(
        error=error,
        data=data,
    ))

# Create another endpoint to create a new course data (POST) (authenticated)
class CreateCourseAPIView(APIView):
    """ Test Course API. """

    # read in post data
    def post(self, request, format=None):
        course_data = request.data
        print(course_data)
        try:
            # sanitize fields from post data
            title = sanitize_string(course_data["title"])
            active = course_data["active"]
            noOfStudents = course_data["noOfStudents"]
            description = sanitize_string(course_data["description"])
        except KeyError:
            return response(None, "Missing fields")
        print(title, active, noOfStudents, description)
        course_model = Course.create(
            title=title,
            active=active,
            noOfStudents=noOfStudents,
            description=description,
        )

        return response(CourseSerializer(course_model).data)
    
    def get(self, request, format=None):
        couse = Course.objects.all()
        serializer = CourseSerializer(couse, many=True)
        return Response(serializer.data)


# TODO: Create one to list all course data (filterable) (pagination) (GET) (authenticated)
class ListCourseAPIView(APIView):
    """ Test Outreach API. """

    serializer_class = CourseSerializer
    # authentication_classes = [IsAuthenticated]

    def get(self, request, format=None):
        courseList = Course.objects.all()
        return response(CourseSerializer(courseList, many=True).data)
