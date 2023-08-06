#!/bin/bash

cd /app
python manage.py migrate
python manage.py createsuperuser --noinput
python manage.py collectstatic
# python manage.py runserver 0.0.0.0:8000
uwsgi --ini /opt/uwsgi/uwsgi.ini