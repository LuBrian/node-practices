var fs = require('fs');

var filepath = process.argv[2];
var extension = process.argv[3];

filetext = fs.readdir(filepath,function(err,list){
	for (i=0;i<list.length;i++) {
		var get = new RegExp("."+extension);
		if ( get.test(list[i]) ) {
			console.log(list[i]);
		};
	};
});