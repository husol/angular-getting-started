.PHONY: build run component service test lint

build:
	ng build

run:
	ng serve

component:
ifeq ("$(name)", "")
	ng generate component
else
	ng generate component components/$(name)
endif

service:
ifeq ("$(name)", "")
	ng generate service
else
	ng generate service services/$(name)
endif

test:
	ng test

lint:
	ng lint
