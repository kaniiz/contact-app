FROM python:3.11.4


WORKDIR /app

COPY app /app
COPY scripts /scripts
COPY ./requirements.txt /tmp/requirements.txt

RUN pip install uwsgi && \
    pip install --no-cache-dir --upgrade -r /tmp/requirements.txt

RUN python manage.py migrate && \
    chmod +x /scripts/start.sh && \
    mkdir /db && \
    mkdir -p /opt/uwsgi && \
    mkdir -p /var/log/uwsgi

COPY config/uwsgi /opt/uwsgi

EXPOSE 8000

ENTRYPOINT ["/scripts/start.sh"]