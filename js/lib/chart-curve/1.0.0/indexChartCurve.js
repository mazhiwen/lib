// JavaScript Document
define(function(require) {
	
	var $=require('jquery');

	
	var drawChartCurve=require('./draw-chart-curve/drawChartCurve.js');
	var a=new drawChartCurve("chart-curve",1000,400);
	
	
	

	/*
	var oCanvas=document.getElementById("chart-curve");
	oCanvas.width=2000;
	oCanvas.height=2000;

	var oContext=oCanvas.getContext("2d");
	*/


	/*
	oContext.fillRect(0,0,100,100);
	oContext.strokeRect(120,0,100,100);

	oContext.fillStyle="red";
	oContext.strokeStyle="green";
	oContext.fillRect(0, 120, 100, 100);
	oContext.strokeRect(120,120,100,100);

	oContext.fillStyle="rgba(255,0,0,0.4)";
	oContext.fillRect(0,240,100,100);

	oContext.clearRect(50,50,100,100);
	*/
	
	/*
	oContext.beginPath();
	oContext.arc(180,180,100,0,Math.PI*0.5,false);
	oContext.closePath();
	oContext.strokeStyle="red";
	oContext.stroke();
	oContext.strokeRect(0,0,100,100);
	*/

	/*
	oContext.lineTo(100,100);
	oContext.lineTo(150,150);
	oContext.lineTo(200,100);

	oContext.strokeStyle="red";
	oContext.stroke();
	*/

	/*
	oContext.moveTo(50,50);
	oContext.bezierCurveTo(50,50,150,50,150,150);
	oContext.moveTo(50,200);
	oContext.quadraticCurveTo(150,200,150,300);
	oContext.stroke();
	*/

	/*
	var oGradient=oContext.createLinearGradient(0,0,0,300);
	oGradient.addColorStop(0.0,'red');
	oGradient.addColorStop(0.5,'black');
	oGradient.addColorStop(1.0,'green');
	oContext.fillStyle=oGradient;
	oContext.fillRect(0,0,300,300);
	*/

	/*
	var oGradient=oContext.createRadialGradient(50,50,50,300,300,20);

	oGradient.addColorStop(0.0,"red");
	oGradient.addColorStop(0.5,"green");
	oGradient.addColorStop(1.0,"blue");
	oContext.fillStyle=oGradient;
	oContext.fillRect(0,0,500,500);
	*/

	/*
	oContext.fillStyle="red";
	oContext.fillRect(0,0,300,300);


	oContext.fillStyle="green";
	//oContext.translate(100,100);
	oContext.scale(0.5,1);
	oContext.fillRect(0,0,50,50);
	*/


});



