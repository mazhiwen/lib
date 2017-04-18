define(function(require, exports, module) {

	var $ = require('jquery');
	var myDate=new Date();
	var nowYear=myDate.getFullYear().toString();
	var nowMonth=(myDate.getMonth()+1).toString();
	var showYear=nowYear;
	var showMonth=nowMonth;
	
	
	function chooseDate(activateDom,fillDom,finishChooseListener){
		this.activateDom=$(activateDom);
		this.fillDom=$(fillDom);
		this.finishChooseListener=finishChooseListener;
		this.isShow=false;
		/*
		activateDom  激活日期的入口
		fillDom  填充日期Dom
		finishChooseListener  点击日期事件
		*/	
	}

	module.exports=chooseDate;
  
  
	chooseDate.prototype._init=function(){
		this.activateDom.after('<div class="pickDate" style="display:none;"><div><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-chevron-left"></span></button><span>2016</span>年<span>6</span>月<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-chevron-right"></span></button></div><div><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>');
		this.fillDateDom(showYear,showMonth);	
		this.addFillDateListener();
		this.addChangeMonthListener();
		this.addSwitchDateListener();
		
	}
	
	

	chooseDate.prototype.addSwitchDateListener=function(){
		var mythis;
		mythis=this;
		this.activateDom.click(function(){
			if(mythis.isShow){
				mythis.activateDom.next().hide();
				mythis.isShow=false;
			}else{
				mythis.activateDom.next().show();
				mythis.isShow=true;
			}	
		});
	
	}
	
	
	chooseDate.prototype.fillDateDom=function(year,month){
		
		var countMonthDays=this.monthDaysArray(year);
		var a=new Date(year,(month-1),1);
		var b=a.getDay();
		if(b==0)b=7;
		var c=b;
		a=1;
		while(a<=countMonthDays[month-1]){
			this.activateDom.next().children("div:eq(2)").children("span:eq("+c+")").attr("data-isnow","");
			this.activateDom.next().children("div:eq(2)").children("span:eq("+c+")").text(a);
			a++;
			c++;
		}
		a=1;
		while(c<=41){
			this.activateDom.next().children("div:eq(2)").children("span:eq("+c+")").attr("data-isnow","next");
			this.activateDom.next().children("div:eq(2)").children("span:eq("+c+")").text(a);
			c++;
			a++;
		}
		if(month==1){
			countMonthDays=this.monthDaysArray(year-1);
			a=countMonthDays[11];
		}
		else{
			a=countMonthDays[month-2];
		}
		//alert(b);
		while((b-1)>=0){
			this.activateDom.next().children("div:eq(2)").children("span:eq("+(b-1)+")").attr("data-isnow","pre");
			this.activateDom.next().children("div:eq(2)").children("span:eq("+(b-1)+")").text(a);
			a--;
			b--;
		}
		this.activateDom.next().children("div:eq(0)").children("span:eq(0)").text(year);
		this.activateDom.next().children("div:eq(0)").children("span:eq(1)").text(month);
		
	}
	
	
	
	chooseDate.prototype.monthDaysArray=function(year){
		var countMonthDays=[31,28,31,30,31,30,31,31,30,31,30,31];
		if((!(year%4)&&year%100)||!(year%400))
		countMonthDays[1]=29;
		return(countMonthDays);
	}
  
	chooseDate.prototype.addFillDateListener=function(){
		
		var mythis;
		mythis=this;
		var isStart=true;
		var startDate;
		var endDate;
		this.activateDom.next().children("div:eq(2)").children().each(function(index, element) {
			$(this).click(function(){
				var y=$(this).parent().prev().prev().children("span").eq(0).text();
				var m=$(this).parent().prev().prev().children("span").eq(1).text();
				if($(this).attr("data-isnow")=="pre"){
					m--;
					if(m==0){m=12;y--;	}
				}
				if($(this).attr("data-isnow")=="next"){
					m++;
					if(m==13){m=1;y++;	}
				}
				if(isStart){
					endDate="";
					//点击时获得起始日期
					startDate=y+'-'+m+'-'+$(this).text();
					mythis.fillDom.val(startDate+"至");
					isStart=false;	
					
				}else{
					endDate=y+'-'+m+'-'+$(this).text();
					var getDate=startDate+"至"+endDate;
					mythis.fillDom.val(getDate);
					mythis.finishChooseListener(getDate);	
					isStart=true;
					mythis.activateDom.next().hide();
					mythis.isShow=false;
				}
				
			});
        });
	}
	
	
	
	chooseDate.prototype.addChangeMonthListener=function(){
		var mythis;
		mythis=this;
		this.activateDom.next().children("div:eq(0)").children("button:eq(0)").click(function(){
			if(showMonth==1){
				showYear--;
				showMonth=13;	
			}
			mythis.fillDateDom(showYear,(showMonth-1));
			showMonth--;
		});

		this.activateDom.next().children("div:eq(0)").children("button:eq(1)").click(function(){
			if(showMonth==12){
				showYear++;
				showMonth=0;	
			}
			mythis.fillDateDom(showYear,(parseInt(showMonth)+1));
			showMonth++;
		});

	}
	
	
	

});

