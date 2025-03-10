from django.urls import path, include
from django.shortcuts import redirect

def redirect_to_login(request):
    return redirect("login")  # Redirect to the login page

urlpatterns = [
    path("", redirect_to_login, name="home"),  # Redirect root URL to login page
    path("accounts/", include("accounts.urls")),  # Include the accounts app URLs
]
