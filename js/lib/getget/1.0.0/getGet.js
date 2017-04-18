define(function(require, exports, module) {

  function getGet(key){

	var a=window.location.href;
	var b=new RegExp("\\S+?\\?\\S*?"+key+"=([^&]+)&{0,1}","g");
	var c=b.exec(a);
	if(c)
	return c[1];
	else
	return false;
	
  }
  
  module.exports=getGet;
});

