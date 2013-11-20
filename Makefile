
html: foo
	jade templates --out html --pretty

foo:
	@echo "shall we play a game?"

test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

.PHONY: test html