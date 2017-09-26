build:
	docker-compose build

full-build:
	docker-compose build --no-cache

run:
	docker-compose up

terminal:
	docker exec -i -t bphogh_web_1 /bin/bash
