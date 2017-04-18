define(function(require) {
	
	var $=require('jquery');

	var coverImageDom=document.getElementById('cover-image');
	coverImageDom.addEventListener("change",function(event){
		var files=coverImageDom.files;
		var formData=new FormData();
		for(var i=0,file;file=files[i];i++){
			formData.append(file.name, file);
		}
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load',function(event){

			console.log(JSON.parse(xhr.responseText)['11_jpg']['name']);
			/*
			JSON.parse(xhr.responseText,function(key,value){
				if(key!=='') 
				console.log(value);
			});*/
		
		});
		xhr.open("POST", "../js/main/fileupload/1.0.0/upload.php", true);
		xhr.send(formData);
	},false);
});

