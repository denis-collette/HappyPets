from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    """
    Custom user model that extends the default Django user model.
    This allows for additional fields and custom behavior.
    """
    # Add any additional fields here if needed
    # For example:
    # bio = models.TextField(blank=True, null=True)
    
    email = models.EmailField(unique=True, blank=False, null=False)
    
    def __str__(self):
        return self.username