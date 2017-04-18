define(function(require) {
	
	AJAX_URL="//app.asset3.com:8080";
	//AJAX_URL="//app.asset3.com";
	$ = require('jquery');
	
	var Y_M_D_DayRegion=require('Y_M_D_DayRegion');


	$("#filldate").val("");
	$("#selectdate").val("今日");
	

	var todayDateRegion=Y_M_D_DayRegion(0,0,"至");

	
	$("#exportexcel").attr("data-date",todayDateRegion);

	var userListListener = require('./userlistlistener/userListListener');
	var my_userListListener = new userListListener("#tablebody");
	

	var showUserList = require('./showuserlist/showUserList');
	var my_showUserList = new showUserList("#tablebody",todayDateRegion,"1");
	my_showUserList._init();
	


	var chooseDate=require('chooseDate');
	var my_chooseDate=new chooseDate('#activedate','#filldate',function(d){my_showUserList = new showUserList("#tablebody",d,"1");my_showUserList._init();$("#exportexcel").attr("data-date",d);});
	my_chooseDate._init();


	$("#selectdate").change(function(){
		var d=$(this).val();
		var v;
		if(d=="今日"){
			v=todayDateRegion;
		}else if(d=="昨日"){
			v=Y_M_D_DayRegion(-1,0,"至");

			
		}else{
			v=Y_M_D_DayRegion(-7,7,"至");
			
		}
		$("#filldate").val("");
		$("#exportexcel").attr("data-date",v);
		my_showUserList = new showUserList("#tablebody",v,"1");
		my_showUserList._init();
	});


	
	$("#exportexcel").click(function(){
		var d=$(this).attr("data-date").split("至");
		window.open(AJAX_URL+"/Asset3/user/admin/download_userlist?startTime="+d[0]+" 00:00:00&endTime="+d[1]+" 23:59:59&token=dd20667c-a88f-48d8-98f8-cbe5837f071a");

	});


	
});

