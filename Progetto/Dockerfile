# Use a lightweight base image
FROM nginx:alpine

COPY . /usr/share/nginx/html/Progetto
COPY ./csr /app/csr
COPY default.conf /etc/nginx/conf.d