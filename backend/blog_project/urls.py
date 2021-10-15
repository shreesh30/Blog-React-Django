
from django.contrib import admin
from django.urls import path
from django.urls.conf import include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path('api-admin/', include('rest_framework.urls')),
    path('summernote/', include('django_summernote.urls')),
    path('api/blog/', include('blog_app.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Brings in the media url and media root that we defined in our settings.py

# FOR REACT ROUTER, ONCE WE START WITH REACT ALL THE REQUESTS WILL BE HANDLED HERE
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
