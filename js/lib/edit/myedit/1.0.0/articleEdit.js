define(function(require) {
	
	//$=require('jquery');


	document.getElementById('edit-area').contentDocument.designMode = "on"; 
	var iframe = document.getElementById('edit-area');
	iframe = iframe.contentWindow ? iframe.contentWindow : 
			(
	             iframe.contentDocument.document ?
	             iframe.contentDocument.document : 
	             iframe.contentDocument
	         );
	iframe.document.open();
	iframe.document.write('<b>dsass</b>');
	iframe.document.close();
	console.log(iframe);
	console.log(iframe.document.body.innerHTML);

});

