define(function(require, exports, module) {

	module.exports = drawChartCurve;

	function drawChartCurve(id,width,height) {
		/*
			长
			高
			x轴最大值
			y轴最大值
			x轴密度
			y轴密度
			键值对象

		*/
		var eCanvas=document.getElementById("chart-curve");
		eCanvas.width=width;
		eCanvas.height=height;

		console.log(eCanvas.offsetTop);
		console.log(eCanvas.offsetLeft);
		oContext=eCanvas.getContext("2d");

		oContext.fillStyle="rgba(0,0,0,0.05)";
		oContext.fillRect(0,0,width,height);

		oContext.strokeStyle="rgba(0,0,0,0.5)";
		oContext.moveTo(25,height-25);
		oContext.lineTo(width-25,height-25);
		oContext.moveTo(25,height-25);
		oContext.lineTo(25,25);
		oContext.moveTo(50,height-25);
		oContext.lineTo(50,height-50);
		
		oContext.font = "20px serif";
		oContext.textAlign = "center";
		oContext.fillStyle="rgba(0,0,0,0.8)";
		oContext.fillText("1dsadsa",50,height-5);
		
		oContext.stroke();
		eCanvas.addEventListener("mousemove",function(event){
			console.log(event.clientX);
			console.log(event.clientY);

		});
		
		

	

	

	



	


	}

	drawChartCurve.prototype._init = function() {



	};



  
  

	
  

});

