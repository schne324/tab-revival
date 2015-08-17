
module.exports = parser;

var rx = /^(?:\w*\s)?([-\dhp\/\\]+)[\s\r\n]*$/gm;

function parser(str) {
	var tab = [];
  var results;

  while ((results = rx.exec(str)) !== null) {
    var string = results[1];
    string && tab.push(results[1]);
  }

  var moments = [];

  tab.forEach(function (guitarString, index) {
    if (!moments[index]) {
      moments[index] = [];
    }

    var thisMoment = moments[index];
    var stringMoments = guitarString.length;

    for (var i = 0; i < stringMoments; i++) {
      thisMoment.push(guitarString[i]);
    }
  });
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