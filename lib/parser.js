
module.exports = parser;

var rx = /^(?:[^-\dhpbrvtx\/\\]*)?([-\s\dhpbrvtx\/\\]+)[\r\n]*$/gm;

function parser(str) {
  var sixString = [];
  var results;

  while ((results = rx.exec(str)) !== null) {
    var string = results[1].trim().replace(/(\r\n|\r|\n)/, '');
    if (string) {
      sixString.push(string);
    }
  }

  var moments = [];

  sixString.forEach(function (string, stringKey) {
    for (var i = 0; i < string.length; i++) {

      if (stringKey === 0) {
        moments.push({});
      }

      moments[i][stringKey] = string[i];
    }
  });

  return moments;
}

/*
h - hammer on
p - pull off
b - bend string up
r - release bend
/ - slide up
\ - slide down
v - vibrato (sometimes written as ~)
t - right hand tap
x - muted
*/
