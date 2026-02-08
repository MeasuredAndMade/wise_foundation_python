from django.contrib import admin
from .models import Creator, Tag, Category, Project

admin.site.register(Creator)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Project)