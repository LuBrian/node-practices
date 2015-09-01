var fs = require('fs');
var filepath = process.argv[2];
filetext = fs.readFile(filepath,function(err,contents){
	var text = contents.toString();
	var arr = text.split(/\n/);
	console.log(arr.length-1);
});