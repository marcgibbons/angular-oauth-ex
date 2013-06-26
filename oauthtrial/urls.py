from django.conf.urls import patterns, include, url
from django.contrib import admin
from app.views import LoginView

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'oauthtrial.views.home', name='home'),
    # url(r'^oauthtrial/', include('oauthtrial.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^oauth2/', include('provider.oauth2.urls', namespace='oauth2')),

    url(r'^api/user', LoginView.as_view()),
)
