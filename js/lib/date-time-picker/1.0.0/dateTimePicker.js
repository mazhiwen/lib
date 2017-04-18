define(function(require, exports, module) {

	var $ = require('jquery');
	var myDate=new Date();
	var nowYear=myDate.getFullYear().toString();
	var nowMonth=(myDate.getMonth()+1).toString();
	var showYear=nowYear;
	var showMonth=nowMonth;
	
	
	function dateTimePicker(activateDom,fillDom,finishChooseListener){
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

	module.exports=dateTimePicker;
  
  
	dateTimePicker.prototype._init=function(){
		this.activateDom.after('<div class="dateTimePicker" style="display:none;"><div><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-chevron-left"></span></button><span>2016</span>年<span>6</span>月<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-chevron-right"></span></button></div><div><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div><select><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>时<select><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>分<select><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>秒<button>确认</button></div></div>');
		this.fillDateDom(showYear,showMonth);	
		this.addFillDateListener();
		this.addChangeMonthListener();
		this.addSwitchDateListener();
		
	}
	
	

	dateTimePicker.prototype.addSwitchDateListener=function(){
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
	
	
	dateTimePicker.prototype.fillDateDom=function(year,month){
		
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
	
	
	
	dateTimePicker.prototype.monthDaysArray=function(year){
		var countMonthDays=[31,28,31,30,31,30,31,31,30,31,30,31];
		if((!(year%4)&&year%100)||!(year%400))
		countMonthDays[1]=29;
		return(countMonthDays);
	}
  
	dateTimePicker.prototype.addFillDateListener=function(){
		
		var mythis;
		mythis=this;
		var getDate;

		this.activateDom.next().children("div:eq(3)").children("button").click(function(){
			getHMS=$(this).prev().prev().prev().val()+':'+$(this).prev().prev().val()+':'+$(this).prev().val();
			mythis.fillDom.val(getDate+' '+getHMS);
			
		});

		this.activateDom.next().children("div:eq(2)").children().each(function(index, element) {
			$(this).click(function(){
				$(this).siblings().css("background-color","transparent");
				$(this).siblings().css("color","black");
				$(this).css("background-color","rgb(0, 162, 202)");
				$(this).css("color","white");
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
				getDate=y+'-'+m+'-'+$(this).text();

			});


		});

	}
	
	
	
	dateTimePicker.prototype.addChangeMonthListener=function(){
		var mythis;
		mythis=this;
		this.activateDom.next().children("div:eq(0)").children("button:eq(0)").click(function(){
			if(showMonth==1){
				showYear--;
				showMonth=13;	
			}
			mythis.fillDateDom(showYear,(showMonth-1));
			showMonth--;
			mythis.activateDom.next().children("div:eq(2)").children().css("background-color","transparent");
			mythis.activateDom.next().children("div:eq(2)").children().css("color","black");
		});

		this.activateDom.next().children("div:eq(0)").children("button:eq(1)").click(function(){
			if(showMonth==12){
				showYear++;
				showMonth=0;	
			}
			mythis.fillDateDom(showYear,(parseInt(showMonth)+1));
			showMonth++;
			mythis.activateDom.next().children("div:eq(2)").children().css("background-color","transparent");
			mythis.activateDom.next().children("div:eq(2)").children().css("color","black");
		});

	}
	
	
	

});

