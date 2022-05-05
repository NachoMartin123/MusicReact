build:
	cd backend_music_react && $(MAKE) build 
	cd frontend_music_react && $(MAKE) build

up:
	docker-compose up


down:
	docker-compose down