
module.exports = parser;

var rx = /^(?:\w*\s)?([-\dhp\/\\]+)[\s\r\n]*$/gm;

function parser(str) {
	var tab = [];
  var results;
  while ((results = rx.exec(str)) !== null) {
    var string = results[1];
    string && tab.push(results[1]);
  }

  console.log(tab);
}
