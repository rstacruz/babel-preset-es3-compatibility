babel := ./node_modules/.bin/babel
test := f() { bash -c "diff -u <(cat $$1/actual.js | $(babel) --presets es2015,./) $$1/expected.js"; }; f
test:
	$(test) test/basic

.PHONY: test
