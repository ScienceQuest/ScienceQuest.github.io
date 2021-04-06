from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('acercaDe.html', views.about, name='about'),
    path('Statistics.html', views.statistics, name='statistics'),
    path('porQueStem.html', views.stem, name='stem'),
    path('AboutUs.html', views.aboutUs, name='aboutUs'),

]