define(function(require, exports, module) {

  function Y_M_D_DayRegion(nf,nr,s){
	/*
		nf:距离今日天数
		nr:距离nf天数
		s:两天之间的连接符
		*/
		var of=new Date(new Date().getTime()+nf*86400000);
		var ot=new Date(of.getTime()+nr*86400000);
		return of.getFullYear()+"-"+(of.getMonth()+1)+"-"+of.getDate()+s+ot.getFullYear()+"-"+(ot.getMonth()+1)+"-"+ot.getDate();
		
  }
  
  module.exports=Y_M_D_DayRegion;
});

