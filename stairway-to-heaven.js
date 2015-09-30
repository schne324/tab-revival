
var parser = require('../scripts/parser.js');
var fs = require('fs-extra');
var assert = require('better-assert');
var tab = fs.readFileSync('test/tab/stairway-to-heaven.txt', 'utf-8');


describe('tab parser', function () {
  var intro = [ // TODO: Test entire tab txt file
    'e ------5--7-----7--8------8--2-----2-0--------0---------------',
    'B ----5------5--------5---------3--------1---1---1----0-1-1----',
    'G --5----------5--------5---------2--------2-------2--0-2-2----',
    'D 7--------6--------5---------4-------3------------------------',
    'A ----------------------------------------------------2-0-0-0--',
    'E -------------------------------------------------------------'
  ].join('\r\n');
  var moments = parser(intro);

  it('should build an array of "moments"', function () {
    assert(Array.isArray(moments));
  });

  it('should parse out useless characters at the beginning of each "string"', function () {
    var itAintMe = ['e', 'b', 'g', 'd', 'a'];
    moments.forEach(function (moment) {
      for (key in moment) {
        if (moment.hasOwnProperty(key)) {
          assert(itAintMe.indexOf(moment[key].toLowerCase()) === -1);
        }
      }
    });
  });
  it('should handle hammers and pull offs');
  it('should handle slides');

  describe('each moment', function () {
    it('should be an object consisting of exactly 6 values', function () {
      moments.forEach(function (moment) {
        var momentLength = 0;
        for (key in moment) {
          if (moment.hasOwnProperty(key)) {
            momentLength++;
            assert(moment[key].length === 1);
          }
        }

        assert(momentLength === 6);
      });
    });
  });
});


