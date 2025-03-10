from django.shortcuts import render

def home(request):
    return render(request, 'energy/home.html')  # Make sure the path is correct
