FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf *
COPY * ./
RUN chown -R www-data:www-data .

EXPOSE 80
