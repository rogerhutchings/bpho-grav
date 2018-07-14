FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html

# Update Grav
# Note that we have to call the scripts using `php <script>`, since for some
# reason chmod-ing these files doesn't work :/
RUN php bin/gpm -nyq selfupgrade
RUN php bin/gpm -nyq update

# Clone repo
RUN mkdir tmp-repo &&\
  git clone https://github.com/rogerhutchings/bpho-grav.git tmp-repo &&\
  chown -R www-data:www-data tmp-repo/* &&\
  rm -rf user &&\
  mv tmp-repo/user .

EXPOSE 80
