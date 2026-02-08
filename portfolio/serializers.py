from rest_framework import serializers
from .models import Project, Tag, Category, Creator, ProjectImage

class CreatorSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Creator
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']

class ProjectSerializer(serializers.ModelSerializer):
    creators = CreatorSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)

    # Accepts IDs on write
    creator_ids = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Creator.objects.all(), write_only=True
    )
    tag_ids = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Tag.objects.all(), write_only=True
    )
    category_ids = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all(), write_only=True
    )


    class Meta:
        model = Project
        fields = '__all__'

    def create(self, validated_data):
        creator_ids = validated_data.pop('creator_ids')
        tag_ids = validated_data.pop('tag_ids')
        category_ids = validated_data.pop('category_ids')

        images = self.context['request'].FILES.getlist('images')

        project = Project.objects.create( **validated_data )

        project.categories.set(category_ids)
        project.creators.set(creator_ids)
        project.tags.set(tag_ids)

        for img in images:
            ProjectImage.objects.create(project=project, image=img)

        return project
