FROM nginx:alpine

COPY ./app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]