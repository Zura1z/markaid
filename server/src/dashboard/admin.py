from django.contrib import admin

from .models import Account,Course

admin.site.site_header = 'Markaid Dashboard Admin'

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'active', 'noOfStudents')
