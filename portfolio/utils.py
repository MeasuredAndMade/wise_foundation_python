from datetime import datetime
from .models import Project

def get_weekly_featured_project():
    week_number = datetime.now().isocalendar()[1]
    projects = Project.objects.order_by('created_at')
    if not projects.exists():
        return None
    index = week_number % projects.count()
    return projects[index]