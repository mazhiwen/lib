define(function(require,exports,module) {
	
	function navigationMultiLevelUl(outerId,hrefArray,directoryObj){

		var navigationHtmlText='<ul id="navigation">';

		var hrefArrayInd=0;


		
		function iterationGenerateHtml(array){


			
			$.each(array,function(index,value){

				//console.log(fatherDirIndex+"_"+index);
				if(value.constructor==Array) {
					if(value[1].length>0){
						navigationHtmlText+="<li><div>"+value[0]+"</div><ul>";

						iterationGenerateHtml(value[1]);
						navigationHtmlText+="</ul></li>";
					}else{
						
						navigationHtmlText+="<li><a href='"+hrefArray[hrefArrayInd]+"?di="+hrefArrayInd+"'>"+value[0]+"</a></li>";hrefArrayInd++;
					}
				}else{
					navigationHtmlText+="<li><a href='"+hrefArray[hrefArrayInd]+"?di="+hrefArrayInd+"'>"+value+"</a></li>";hrefArrayInd++;
				}		
			});
			
		}
		
		iterationGenerateHtml(directoryObj,'');
		navigationHtmlText+='</ul>';
		
		$(outerId).append(navigationHtmlText);

		$("#navigation div").click(function(){
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

