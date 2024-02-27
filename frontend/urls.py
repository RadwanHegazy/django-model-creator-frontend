from django.urls import path
from app.views import index, code

urlpatterns = [
    path('',index,name='index'),
    path('code/<str:model_id>/',code,name='code')
]
