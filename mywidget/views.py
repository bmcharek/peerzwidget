# Create your views here.
# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template.context import RequestContext
from django.conf import settings
from django.views.generic.simple import direct_to_template
from django.http import HttpResponse

def home(request):#a test view
    return direct_to_template(request, "home.html") 

def widget(request):#a test view
    return direct_to_template(request, "widget.html") 

import json
##import logging
def jsondata(request):
    json_data=open('static/greg.json').read()
    ##logging.error( json_data )
    return HttpResponse( json_data  )

def testwidget(request):#a test view
    return direct_to_template(request, "testwidget.html") 

