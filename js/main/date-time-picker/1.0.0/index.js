define(function(require) {
	
	$ = require('jquery');
	

	var dateTimePicker=require('dateTimePicker');
	var my_chooseDate=new dateTimePicker('#activedate','#filldate',function(d){});
	my_chooseDate._init();
/*

	var i='0';
	var s='';
	do{
		if(i<10)
			i='0'+i;
		s+='<option value="'+i+'">'+i+'</option>';
		//console.log();

	}while(++i<=23)
	console.log(s);*/
});

