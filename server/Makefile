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
	python src/manage.py migrate 
	# $(MAKE) loadfixtures


# .PHONY: loadfixtures
# loadfixtures: 
	
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