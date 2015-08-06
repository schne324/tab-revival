
var parser = require('../scripts/parser.js');
var fs = require('fs-extra');
var assert = require('better-assert');
var tab = fs.readFileSync('test/stairway-to-heaven.txt', 'utf-8');


describe('tab parser', function () {
	parser([
    'e ------5--7-----7--8------8--2-----2-0--------0---------------',
    'B ----5------5--------5---------3--------1---1---1----0-1-1----',
    'G --5----------5--------5---------2--------2-------2--0-2-2----',
    'D 7--------6--------5---------4-------3------------------------',
    'A ----------------------------------------------------2-0-0-0--',
    'E -------------------------------------------------------------'
  ].join('\r\n'));

  it('should build an array of "moments"');
	it('should build each moment with 6 "string" objects');
  // parse out "eBGDAE" if its there...
  it('should parse out useless characters at the beginning of each "string"');
  it('should handle hammers and pull offs');
  it('should handle slides');
});


