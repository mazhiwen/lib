define(function(require,exports,module) {
	function navigationMultiLevelUl(outerId,hrefArray,directoryObj){

		/*
			outerId
			hrefArray
			directoryObj
		*/

		var navigationHtmlText='<ul class="navigation-multi-level-ul">';

		var hrefArrayInd=0;

		function iterationGenerateHtml(array,fatherDirIndex){
			
			$.each(array,function(index,value){
				if(value.constructor==Array) {
					if(value[1].length>0){
						navigationHtmlText+="<li><div>"+value[0]+"</div><ul>";

						iterationGenerateHtml(value[1],fatherDirIndex+"_"+index);
						navigationHtmlText+="</ul></li>";
					}else{
						navigationHtmlText+="<li><a href='"+hrefArray[hrefArrayInd]+"?di="+fatherDirIndex+"_"+index+"'>"+value[0]+"</a></li>";hrefArrayInd++;
					}
				}else{
					navigationHtmlText+="<li><a href='"+hrefArray[hrefArrayInd]+"?di="+fatherDirIndex+"_"+index+"'>"+value+"</a></li>";hrefArrayInd++;
				}		
			});
			
		}
		
		iterationGenerateHtml(directoryObj,'');
		navigationHtmlText+='</ul>';
		
		$(outerId).append(navigationHtmlText);

		$(".navigation-multi-level-ul div").click(function(){
			$(this).next().css("display")=="block"?$(this).next().hide():$(this).next().show();				
		});

		//$("#navigation a").each(function(index,ele){
		//	$(this).attr("href",hrefArray[index]);
		//});
		
		
		

	}



	module.exports=navigationMultiLevelUl;



	navigationMultiLevelUl.prototype._init=function(){

	}



	
});

