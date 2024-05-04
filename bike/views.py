from django.shortcuts import render,HttpResponse
# Create your views herev python  functions.
def home(request):
    return HttpResponse("This is bike Modules")
