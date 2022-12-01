.PHONY: run
run:
	pipenv run python src/manage.py runserver 0.0.0.0:8000

.PHONY: superuser
superuser:
	DJANGO_SUPERUSER_PASSWORD=admin pipenv run python src/manage.py createsuperuser --no-input \
		--username admin \
		--email admin@admin.com

.PHONY: migrate
migrate: 
	pipenv run python src/manage.py makemigrations
	pipenv run python src/manage.py makemigrations dashboard
	pipenv run python src/manage.py migrate 
	$(MAKE) loadfixtures


.PHONY: loadfixtures
loadfixtures: 
	
	
.PHONY: dump
dump: 
	pipenv run python src/manage.py dumpdata tracker.question --indent 4 >> data.json


.PHONY: setup
setup: 