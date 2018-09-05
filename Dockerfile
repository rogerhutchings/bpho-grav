FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf *
RUN mkdir repo
COPY ./ ./repo
RUN mv ./repo/* .
RUN rm -rf repo
RUN chown -R www-data:www-data .

EXPOSE 80
