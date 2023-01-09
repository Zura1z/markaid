.PHONY: all
all:
	$(MAKE) clean
	$(MAKE) migrate
	$(MAKE) superuser
	$(MAKE) run

.PHONY: run
run:
	python src/manage.py runserver

.PHONY: superuser
superuser:
	DJANGO_SUPERUSER_PASSWORD=admin python src/manage.py createsuperuser --no-input \
		--username admin \
		--email admin@admin.com

.PHONY: migrate
migrate: 
	python src/manage.py makemigrations
	python src/manage.py makemigrations dashboard
	python src/manage.py makemigrations AIModels

	python src/manage.py migrate 
	$(MAKE) loadfixtures


.PHONY: loadfixtures
loadfixtures: 
	python src/manage.py loaddata Teacher
	python src/manage.py loaddata Student
	python src/manage.py loaddata Course
	python src/manage.py loaddata Quiz
	python src/manage.py loaddata Question
	python src/manage.py loaddata Answer
	
.PHONY: clean
clean: 
	rm -rf ./src/dashboard/migrations
	rm -rf ./src/AIModels/migrations
	rm -rf ./src/db.sqlite3

.PHONY: dump
dump: 
	python src/manage.py dumpdata tracker.question --indent 4 >> data.json


.PHONY: setup
setup: 