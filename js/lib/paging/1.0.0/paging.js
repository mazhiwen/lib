define(function(require, exports, module) {

  var $ = require('jquery');
  
  function paging(pagingDom,pagingCount,maxPaging,getPaging,clickFunction){
	this.pagingDom=$(pagingDom);
    this.pagingCount=pagingCount;
	this.maxPaging=maxPaging;
	this.getPaging=parseInt(getPaging);
	this.clickFunction=clickFunction;
	this.clickPaging=0;
	this.getPagingLiIndex=0;
	/*
	pagingDom <ul class="paging"></ul>
	maxPaging   需要是奇数 即2x+1
	*/		
  }
  
  module.exports=paging;
  paging.prototype._init=function(){
	this.pagingDom.empty();
	var fillHtmlText="";
	if(this.pagingCount<=this.maxPaging){
		//总页数小于等于最大页
		fillHtmlText=this.getFillText(0,this.pagingCount);
		this.getPagingLiIndex=this.getPaging;
		this.fillPaging(fillHtmlText,this.pagingCount+1);
	}else{
		//总页数大于最大页
		if(this.getPaging<(this.maxPaging-1)/2+2){
			//当前页数<(this.maxPaging-1)/2+2  无头省略号 有尾省略号 
			fillHtmlText=this.getFillText(0,this.maxPaging-1);
			fillHtmlText+="<li><a>...</a></li>";
			this.getPagingLiIndex=this.getPaging;
			this.fillPaging(fillHtmlText,this.maxPaging+1);
		}else{
			//当前页数>=(this.maxPaging-1)/2+2  
			if(this.getPaging<(this.pagingCount-(this.maxPaging-1)/2)){
				//有头省略号  有尾省略号    
				fillHtmlText="<li><a>...</a></li>";
				fillHtmlText+=this.getFillText(this.getPaging-(this.maxPaging-1)/2,this.getPaging+(this.maxPaging-1)/2-1);
				fillHtmlText+="<li><a>...</a></li>";
				this.getPagingLiIndex=(this.maxPaging-1)/2+1;
				this.fillPaging(fillHtmlText,this.maxPaging+1);
			}else{
				//有头省略号  无尾省略号 
				fillHtmlText="<li><a>...</a></li>";
				fillHtmlText+=this.getFillText(this.pagingCount-(this.maxPaging-1),this.pagingCount);
				this.getPagingLiIndex=this.maxPaging-this.pagingCount+this.getPaging;
				this.fillPaging(fillHtmlText,this.maxPaging+1);
			}	
		}
	}	
  }
  
  
  paging.prototype.fillPaging=function(fillHtmlText,count){
  	
  	var mythis=this;
	this.pagingDom.append("<li><a>&laquo;</a></li>");  	  
	this.pagingDom.children("li:first").after(fillHtmlText);
	this.pagingDom.append('<li><a>&raquo;</a></li>');
	this.pagingDom.children("li:eq("+this.getPagingLiIndex+")").addClass("active");
	this.pagingDom.children("li:gt(0):lt("+this.maxPaging+")").each(function(index,elem){
		$(this).click(function(){
			mythis.clickPaging=parseInt($(this).text());
			//mythis.clickFunction.getPaging=parseInt($(this).text());
			//mythis.clickFunction._init();
			mythis.clickFunction();
		});	
		
	});


	this.pagingDom.children("li:first").click(function(){
		mythis.clickPaging=mythis.getPaging-1;
		mythis.clickFunction();

	});


	this.pagingDom.children("li:last").click(function(){
		mythis.clickPaging=mythis.getPaging+1;
		mythis.clickFunction();

	});
	
  }
  
  
  paging.prototype.getFillText=function(fromPaging,toPaging){
	var i=fromPaging;
	var fillHtmlText="";
	for(i;i<toPaging;i++){
		fillHtmlText+="<li><a>"+(i+1)+"</a></li>";
	}
	return fillHtmlText;
  }


});

