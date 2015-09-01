var mymodule = require('./module.js');

var filepath = process.argv[2];
var extension = process.argv[3];

mymodule(filepath,extension, function(err,list){
	if (err) {
    console.error(err);
    return;
  }
});