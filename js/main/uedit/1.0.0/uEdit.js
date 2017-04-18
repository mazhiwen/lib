define(function(require) {

	$=require('jquery');

	var ue = UE.getEditor('edit',{

		toolbars:[['bold','italic','underline','|','blockquote','insertorderedlist','insertunorderedlist','simpleupload','source']],
		autoHeightEnabled: false,
		autoFloatEnabled: true,
		initialFrameHeight:500,
		elementPathEnabled:false
	});



	ue.ready(function(){

		//var html = ue.getContent();

		//console.log(ue);


	});


	$("#commit-button").click(function(){
		console.log(ue.getContent());
	});



	$("#other-outer").hide();
	$("#navigation-article").click(function(){

		$("#edit-article-outer").show();
		$("#other-outer").hide();

	});
	
	$("#navigation-other").click(function(){

		$("#edit-article-outer").hide();
		$("#other-outer").show();

	});

});

