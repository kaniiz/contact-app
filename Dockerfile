FROM python:3.11.4

RUN pip install django

WORKDIR /app

COPY app /app
COPY scripts /scripts

RUN python manage.py migrate && chmod +x /scripts/start.sh

EXPOSE 8000

ENTRYPOINT ["/scripts/start.sh"]