FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx

RUN rm -rf html
RUN mkdir html
RUN chown -R www-data:www-data html

WORKDIR /usr/share/nginx/html
RUN git clone https://github.com/rogerhutchings/bpho-grav.git .
RUN chown -R www-data:www-data .

EXPOSE 80
