build:
	cd backend_music_react && $(MAKE) build 
	cd frontend_music_react && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down