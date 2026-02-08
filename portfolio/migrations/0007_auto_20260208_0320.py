from django.db import migrations
from django.contrib.auth import get_user_model

def create_superuser(apps, schema_editor):
    User = get_user_model()
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser(
            username='admin',
            email='admin@example.com',
            password='admin123'
        )

class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_auto_20260208_0318'),
    ]

    operations = [
        migrations.RunPython(create_superuser),
    ]
