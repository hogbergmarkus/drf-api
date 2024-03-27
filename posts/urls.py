from django.urls import path
from profiles import views


urlpatterns = [
    path('posts/', views.PostList.as_view()),
]
