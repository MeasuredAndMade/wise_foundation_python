from django.contrib.auth import get_user_model
from django.db.utils import OperationalError

User = get_user_model()

def run():
    try:
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='measuredandmade@outlook.com',
                password='admin123'
            )
            print('Superuser created')
        else:
            print('Superuser already exists')
    except OperationalError:
        # Database not ready yet
        pass