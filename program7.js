var http = require('http');

var source = process.argv[2];
http.get(source,function(data){
	data.on("data",function(data){
		console.log(data.toString());
	});
});