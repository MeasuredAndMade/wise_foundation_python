from rest_framework import viewsets, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout, authenticate, login
from django.core.mail import EmailMessage
from django.conf import settings
from .models import Project, Tag, Category, Creator
from .serializers import ProjectSerializer, TagSerializer, CategorySerializer, CreatorSerializer
from .utils import get_weekly_featured_project

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        category = self.request.query_params.get('category')

        if category:
            queryset = queryset.filter(categories__id=category)

        return queryset


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CreatorViewSet(viewsets.ModelViewSet):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is None:
        return Response({'error': "Invalid credentials"}, status=400)
    login(request, user)
    return Response({
        'message': 'Logged In',
        'username': user.username,
        'is_superuser': user.is_superuser
    })

@api_view(['GET'])
def me(request):
    # Returns the corrently logged in user. Used by your React frontend to check auth + superuser status
    user = request.user
    if not user.is_authenticated:
        return Response({
            'username': None,
            'is_superuser': False
        })
    
    return Response({
        'username': user.username,
        'is_superuser': user.is_superuser
    })

@api_view(['GET'])
def logout_view(request):
    # Logs out the user by clearing the session cookie.
    logout(request)
    return Response({'message': "Logged out"})

@api_view(["POST"])
def contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not name or not email or not message:
        return Response({"error": "Missing Information"}, status=400)
    
    full_message = f"""
        New contact form submission:
        Name: {name}
        Email: {email}

        Message: 
        {message}
    """
    subject = f"Project Inquiry from {name}"
    email_message = EmailMessage(
        subject = subject,
        body = full_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=['contact@measured-and-made.com'],
        reply_to=[email]
    )

    email_message.send()

    return Response({'success': True})

@api_view(["GET"])
def featured_project(request):
    project = get_weekly_featured_project()
    if not project:
        return Response({'error': 'No projects available'}, status=404)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)