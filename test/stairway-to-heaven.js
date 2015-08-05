
var parser = require('../scripts/parser.js');
var fs = require('fs-extra');
var assert = require('better-assert');
var tab = fs.readFileSync('test/stairway-to-heaven.txt', 'utf-8');


describe('parser shit', function () {
	var parsedTab = parser(tab);

	it('should do some things');
})


