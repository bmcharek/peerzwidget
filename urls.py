from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template
from django.conf import settings
import django.contrib.sitemaps.views
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'peerzwidget.mywidget.views.home'  , name='home'),
    url(r'^widget/', 'peerzwidget.mywidget.views.widget', name='widget'),
    url(r'^testwidget/', 'peerzwidget.mywidget.views.testwidget', name='testwidget'),
    url(r'^jsondata/', 'peerzwidget.mywidget.views.jsondata', name='jsondata'),
    # url(r'^peerzwidget/', include('peerzwidget.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
