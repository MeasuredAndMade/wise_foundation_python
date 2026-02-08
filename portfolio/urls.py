from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    ProjectViewSet,
    TagViewSet,
    CategoryViewSet,
    CreatorViewSet,
    me,
    logout_view,
    login_view,
    contact,
    featured_project
)

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'tags', TagViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'creators', CreatorViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('me/', me),
    path('logout/', logout_view),
    path('login/', login_view),
    path('contact/', contact),
    path('featured_project/', featured_project)
]
