define(function(require, exports, module) {

	module.exports = userListListener;

	function userListListener(fatherDom) {
		this.fatherDom=$(fatherDom);
		var mythis=this;
		// body...
		$("#tablebody").on("change","select",function(){

			if($(this).val()!="")
				$(this).parent().prev().children("button:eq(0)").attr("disabled",false);
			else
				$(this).parent().prev().children("button:eq(0)").attr("disabled",true);
		});

		function buttonAjax(steward_id,userid,flag){
			//console.log(steward_id+userid+flag);
			
			//http://app.asset3.com:8080/Asset3/user/admin/verify_user?steward_id=3&userid=2&flag=red&token=02ed4dd8-4c14-4545-8b92-83950e2ee65b
			
			$.ajax({

				type:"GET",
				url:AJAX_URL+"/Asset3/user/admin/verify_user?steward_id="+steward_id+"&userid="+userid+"&flag="+flag+"&token=dd20667c-a88f-48d8-98f8-cbe5837f071a",
				datatype:"json",
				success:function(data){
					if(data["s"]==1){
						if(flag="green"){
						}else{

						}

					}else{

					}
				}	
			});
		}


		var AssignArr=new Array("","","","李博文","陈禄","饶琴","汪皆慰","贺斌","王昱民");

		$("#tablebody").on("click",".passcheck",function(){
			//buttonAjax($(this).parent().next().children("select").val(),$(this).parent().parent().attr("data-userid"),"green");
			var steward_id=$(this).parent().next().children("select").val();
			//var steward_text=$(this).parent().next().children("select").text();
			var userid=$(this).parent().parent().attr("data-userid");
			var flag="green";
			var mythis=$(this);
			
			//alert(AssignArr[steward_id]);
			
			
			$.ajax({
				type:"GET",
				url:AJAX_URL+"/Asset3/user/admin/verify_user?steward_id="+steward_id+"&userid="+userid+"&flag="+flag+"&token=dd20667c-a88f-48d8-98f8-cbe5837f071a",
				dataType:"json",
				success:function(data){

					if(data["s"]==1){
						//console.log(data['s']+"是1");
						//alert("操作成功");
						//console.log(mythis.parent().next().html());
						mythis.parent().next().html(AssignArr[steward_id]);
						//console.log($(this).parent().next().html());
						mythis.parent().html('已通过');

					}else{
						//console.log(data['s']+"是0");
						alert("操作失败");

					}
				}	
			});


		});



		$("#tablebody").on("click",".refusecheck",function(){
			var steward_id="0";
			var userid=$(this).parent().parent().attr("data-userid");
			var flag="red";
			var mythis=$(this);
			//alert(AssignArr[steward_id]);
			//buttonAjax("0",$(this).parent().parent().attr("data-userid"),"red");
			$.ajax({
				type:"GET",
				url:AJAX_URL+"/Asset3/user/admin/verify_user?steward_id="+steward_id+"&userid="+userid+"&flag="+flag+"&token=dd20667c-a88f-48d8-98f8-cbe5837f071a",
				dataType:"json",
				success:function(data){

					
					if(data["s"]==1){

						alert("操作成功");
						mythis.parent().next().html("已拒绝");
						mythis.parent().html('已拒绝');

					}else{

						alert("操作失败");

					}
				}	
			});
			
			

		});


	}

	userListListener.prototype._init = function() {



	};



  
  

	
  

});

