FROM phusion/baseimage:0.9.19

CMD ["/sbin/my_init"]

ENV HOME /root
ENV DEBIAN_FRONTEND noninteractive

# Install core packages
RUN apt-get update -q
RUN apt-get upgrade -y -q
RUN apt-get install -y -q php php-cli php-fpm php-gd php-curl php-apcu php-xml php-mbstring php-zip ca-certificates nginx git-core
RUN apt-get clean -q && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Configure Nginx - enable gzip
RUN sed -i 's|# gzip_types|  gzip_types|' /etc/nginx/nginx.conf

# Setup Php service
RUN mkdir -p /run/php/
RUN touch /run/php/php7.0-fpm.sock
RUN mkdir -p /etc/service/php-fpm
RUN touch /etc/service/php-fpm/run
RUN chmod +x /etc/service/php-fpm/run
RUN echo '#!/bin/bash \n\
    exec /usr/sbin/php-fpm7.0 -F' >> /etc/service/php-fpm/run

# Setup Nginx service
RUN mkdir -p /etc/service/nginx
RUN touch /etc/service/nginx/run
RUN chmod +x /etc/service/nginx/run
RUN echo '#!/bin/bash \n\
    exec /usr/sbin/nginx -g "daemon off;"' >>  /etc/service/nginx/run

# Copy app files
RUN rm -fR /usr/share/nginx/html/
RUN mkdir /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html/
COPY ./ ./

# Create volumes
VOLUME /usr/share/nginx/html/logs /usr/share/nginx/html/cache

# Fix permissions
RUN chown -R www-data:www-data *
RUN find . -type f -exec chmod 644 {} +
RUN find ./bin -type f -exec chmod +x {} +
RUN find . -type d -exec chmod 755 {} +
RUN umask 0002

# Setup Grav configuration for Nginx
RUN cp /usr/share/nginx/html/webserver-configs/nginx.conf /etc/nginx/sites-available/default
RUN sed -i \
        -e 's|root /home/USER/www/html|root   /usr/share/nginx/html|' \
        -e 's|server_name localhost;|server_name bpho-production;|' \
        -e 's|unix:/var/run/php/php7.2-fpm.sock;|unix:/run/php/php7.0-fpm.sock;|' \
    /etc/nginx/sites-available/default


# Public ports
EXPOSE 80
