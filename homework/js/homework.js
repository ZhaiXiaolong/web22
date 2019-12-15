	var box=document.getElementById("box");
	var navList=document.getElementById("nav").children;
	var slider=document.getElementById("slider");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var index=1;
	var isMoving=false;
	var timer;
	var sen1=document.getElementById("sen1");

	function next(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index++;
		navChange();
		animate(slider,{left:-1240-1200*(index-1)},function(){
			if(index==6){
				slider.style.left="-1240px";
				index=1;
			}
			isMoving=false;
		});
	}

	function last(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index--;
		navChange();
		animate(slider,{left:-1240-1200*(index-1)},function(){
			if(index==0){
				slider.style.left="-6040px";
				index=5;
			}
			isMoving=false;
		});
	}
	var timer=setInterval(next,3000);

	left.onclick=last;
	right.onclick=next;

	box.onmouseover=function(){
 		animate(left,{opacity:50});
 		animate(right,{opacity:50});
 		clearInterval(timer);
 	}
 	
 	box.onmouseout=function(){
 		animate(left,{opacity:0});
 		animate(right,{opacity:0});
 		timer=setInterval(next,3000);
 	}

 	
 	
 	for(var i=0;i<navList.length;i++){
 		navList[i].idx=i;
 		navList[i].onclick=function(){
 			index=this.idx+1;
 			navChange();
 			animate(slider,{left:-1240-1200*(index-1)});
 		}
 	}
 	
 	function navChange(){
 		for(var i=0;i<navList.length;i++){
 			navList[i].className='';
 		}
 		if(index==6){
 			navList[0].className='active';
 		}else if(index==0){
 			navList[4].className='active';
 		}else{
 			navList[index-1].className='active';
 		}
 	}
 	var intervalId=setInterval(function(){

			var objStyle=getComputedStyle(sen1);
			 if(sen1.style.marginLeft==-1420+"px"){
				sen1.style.marginLeft=-50+"px";
			}
			sen1.style.marginLeft=(parseInt(objStyle["marginLeft"])-1)+"px";
	},10);