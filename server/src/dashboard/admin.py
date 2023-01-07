from django.contrib import admin

from .models import User, Course, Quiz, Question, Answer

admin.site.register(Course)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Answer)
# admin.site.register(User)


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'is_teacher')

admin.site.register(User, UserAdmin)