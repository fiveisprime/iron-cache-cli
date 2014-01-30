SRC = $(wildcard lib*.js)

test: $(SRC)
	@node node_modules/.bin/jshint $^
