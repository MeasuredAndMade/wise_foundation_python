import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()

# Import AFTER Django is fully loaded
from .create_superuser import run as create_superuser
create_superuser()
