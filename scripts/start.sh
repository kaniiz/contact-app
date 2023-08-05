#!/bin/bash

pushd /app
python manage.py migrate

python manage.py runserver 0.0.0.0:8000
popd