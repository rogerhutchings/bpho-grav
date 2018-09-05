FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf *
RUN git clone https://github.com/rogerhutchings/bpho-grav.git .
RUN chown -R www-data:www-data .

EXPOSE 80
