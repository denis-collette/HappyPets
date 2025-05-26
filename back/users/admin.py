from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Register the CustomUser model with the Django admin site
admin.site.register(CustomUser, UserAdmin)