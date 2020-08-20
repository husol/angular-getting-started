.PHONY: build run component test lint

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

test:
	ng test

lint:
	ng lint
