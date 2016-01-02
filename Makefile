babel := ./node_modules/.bin/babel
test := f() { bash -c "diff -u $$1/expected.js <(cat $$1/actual.js | $(babel) --presets ./)"; }; f
test:
	$(test) test/basic
	$(test) test/import

.PHONY: test
