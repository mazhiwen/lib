define(function(require) {
	
	$ = require('jquery');
	

	var chooseDate=require('chooseDate');
	var my_chooseDate=new chooseDate('#activedate','#filldate',function(d){});
	my_chooseDate._init();

	
});

