
var parser = require('../scripts/parser.js');
var fs = require('fs-extra');
var assert = require('better-assert');
var tab = fs.readFileSync('test/stairway-to-heaven.txt', 'utf-8');


describe('parser shit', function () {
	parser([
    'e ------5--7-----7--8------8--2-----2-0--------0---------------',
    'B ----5------5--------5---------3--------1---1---1----0-1-1----',
    'G --5----------5--------5---------2--------2-------2--0-2-2----',
    'D 7--------6--------5---------4-------3------------------------',
    'A ----------------------------------------------------2-0-0-0--',
    'E -------------------------------------------------------------'
  ].join('\r\n'));

	it('should do some things', function () {
    assert(true);
  });
});


