
module.exports = parser;

var rx = /^(?:\w*\s)?([-\dhp\/\\]+)[\s\r\n]*$/gm;

function parser(str) {
  var results;
  while ((results = rx.exec(str)) !== null) {
    console.log(results[1]);
  }
}
