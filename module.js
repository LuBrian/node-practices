
module.exports = function (dirname, ext, callback){
	var fs = require('fs');
	fs.readdir(dirname,function(err,list){
		
		if (err) {
      return callback(err);
    }
    files = [];
    
		for (i=0;i<list.length;i++) {
			var checkExt = new RegExp("."+ ext);
			if ( checkExt.test(list[i]) ) {
				console.log(list[i]);
				files.push(list[i]);
			};
		};
		callback(null,files);
	});
}
