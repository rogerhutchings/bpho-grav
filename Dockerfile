FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf *
RUN mkdir tmp
COPY ./ ./tmp
RUN mv ./tmp/* .
RUN chown -R www-data:www-data .

EXPOSE 80
