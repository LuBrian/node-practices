var fs = require('fs');
var filepath = process.argv[2];
filetext = fs.readFileSync(filepath);
var text = filetext.toString();
var arr = text.split(/\n/);
console.log(arr.length-1);