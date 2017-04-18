	
window.onload=function(){
	var canEle=document.getElementById("mycanvas");
	canEle.width=400;
	canEle.height=400;
	var context = canEle.getContext("2d");
	var lastTouch;

	context.fillStyle="pink";
	context.arc(100,100,80,0,2*Math.PI,false);
	context.fill();
		
	/*
	触摸画图事件监听
	*/
	canEle.addEventListener('touchstart',function(evt){
		context.beginPath();
		var touches = evt.changedTouches;
		if(touches[0].pageX<180){	
			lastTouch=touches[0];
			context.fillStyle="black";
			context.fillRect(touches[0].pageX-2,touches[0].pageY-2,4,4);	
		}
		
	},false);

	canEle.addEventListener('touchmove',function(evt){		
		var touches = evt.changedTouches;
		if(touches[0].pageX<180){
			context.fillStyle="red";
			context.moveTo(lastTouch.pageX,lastTouch.pageY);
			context.lineTo(touches[0].pageX,touches[0].pageY);
			context.stroke();
			lastTouch=touches[0];
		}	
	},false);
	

	/*
	绘制按钮点击开始区域
	
	*/
	context.beginPath();
	context.fillStyle="gray";
	context.fillRect(200,120,80,30);

	/*
	监听开始区域，保存图像

	*/
	canEle.addEventListener('click',function(evt){
		if(evt.clientX>180){
			/*
			生成图片
			var dataUrl=canEle.toDataURL();
			console.log(dataUrl);
			*/
		}
	},false);



	

	/*
	监听事件
	
	*/



	/*
	function fn(){

	}*/
	//setInterval(fn,1000);



	/*
	圆球小程序
	var ctx = canEle.getContext('2d');
	var raf;

	var ball = {
	  x: 100,
	  y: 100,
	  vx: 5,
	  vy: 2,
	  radius: 25,
	  color: 'blue',
	  draw: function() {
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	    ctx.closePath();
	    ctx.fillStyle = this.color;
	    ctx.fill();
	  }
	};

	function draw() {
	  ctx.clearRect(0,0, canEle.width, canEle.height);
	  ball.draw();
	  ball.x += ball.vx;
	  ball.y += ball.vy;
	  raf = window.requestAnimationFrame(draw);
	}

	canEle.addEventListener('mouseover', function(e){
	  raf = window.requestAnimationFrame(draw);
	});

	canEle.addEventListener("mouseout",function(e){
	  window.cancelAnimationFrame(raf);
	});

	ball.draw();

	*/









}





