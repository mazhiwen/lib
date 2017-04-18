// JavaScript Document
$(document).ready(function(e) {
    
	var isScaleAnimation=false;
	
	
	$("#scaleanimation").click(function(){
		if(isScaleAnimation){
			
			$("#homeanimation").css("width","70%");
			isScaleAnimation=false;
		}else{
			$("#homeanimation").css("width","100%");
			isScaleAnimation=true;
			
		}
			
		

	});
	
	
	$("#cancelanimation").click(function(){
		
		$("#homeanimation").hide();

	});
	

});
