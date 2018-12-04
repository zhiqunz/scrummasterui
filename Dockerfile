FROM nginx
ADD build /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/*.conf
ADD webserver.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
