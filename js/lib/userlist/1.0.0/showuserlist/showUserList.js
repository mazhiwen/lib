define(function(require, exports, module) {

	
	var paging=require('paging');

	function showUserList(fatherDom,date,getPaging) {
		this.fatherDom=$(fatherDom);
		this.date=date;
		this.getPaging=getPaging;
	
	}

	module.exports = showUserList;


	showUserList.prototype._init=function(){
		this.fatherDom.empty();
		var mythis=this;

		var getDateArray=mythis.date.split("至");
		
		$.ajax({
			type:"GET",
			url:AJAX_URL+"/Asset3/user/getuserlist",
			data:{pageIndex:mythis.getPaging,startTime:getDateArray[0]+" 00:00:00",endTime:getDateArray[1]+" 23:59:59",token:"dd20667c-a88f-48d8-98f8-cbe5837f071a"},
			dataType:"json",
			success:function(data){
				
				$("#countregister").text(data['userTotalNumber']);
				$("#newregister").text(data['userNumberLimit']);
				$("#newpass").text(data['userAuthNumberLimit']);	
				$.each(data['userPageData'],function(index,item){
					var a=$('<tr class="success"></tr>');
					var AssignArr=new Array("","","","李博文","陈禄","饶琴","汪皆慰","贺斌","王昱民");
					var fillDom="<td>"+item.userid+"</td><td>"+item.realname+"</td>";
					fillDom+="<td>"+item.organization+"</td><td>"+item.post+"</td><td>"+item.mobile+"</td><td>"+item.email+"</td><td>"+item.businesscard+"</td>";
					var myDate=new Date(item.createtime);
					fillDom+="<td>"+myDate.getFullYear()+"年"+(myDate.getMonth()+1)+"月"+myDate.getDate()+"日 "+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"</td>";
					
					switch(item.status){
						case 0:
						fillDom+="<td>用户提交了手机号、验证码，未提交认证信息。或者微信快捷登录了，但未提交认证信息</td>";
						break;
						case 1:
						fillDom+="<td>用户提交了认证信息</td>";
						break;
						case 2:
						fillDom+="<td>用户提交了名片</td>";
						break;
						case 201:
						fillDom+="<td>用户点击了邮件验证的链接，完成了邮件验证</td>";
						break;
						case 3:
						fillDom+="<td>用户审核通过</td>";
						break;
						case 4:
						fillDom+="<td>用户提交了兴趣需求信息</td>";
						break;
						case 5:
						fillDom+="<td>无效用户</td>";
						break;




					}


					if(item.steward_id==0){
						a=$('<tr class="active" data-userid="'+item.userid+'"></tr>');
						fillDom+="<td><button disabled class='passcheck btn btn-primary btn-xs'>通过</button><button class='refusecheck btn btn-warning btn-xs'>拒绝</button></td><td><select><option value =''></option><option value ='4'>陈禄</option><option value ='3'>李博文</option><option value ='5'>饶琴</option><option value ='6'>汪皆慰</option><option value ='7'>贺斌</option><option value ='8'>王昱民</option></select></td>";	
					}else{

						fillDom+="<td>/</td><td>"+AssignArr[item.steward_id]+"</td>";	
					
					}
					
					a.append(fillDom);
					
					mythis.fatherDom.append(a);

				});
				
				
				var pagingCount=data['pages'];
				//自定义
				//var maxPaging=11;
				//var b=new paging('#userlistpaging',pagingCount,maxPaging,mythis.getPaging,new showUserList("#tablebody",mythis.date));
				var b=new paging('#userlistpaging',pagingCount,11,mythis.getPaging,function(){
					var o=new showUserList("#tablebody",mythis.date,this.clickPaging);
					o._init();
				});
				b._init();
				
				},
			error: function(a){
				
				//console.log(a);
				
				}
		});

	}
  
	
  

});

