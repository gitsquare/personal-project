var oHeader = document.querySelector('.header .container');
var isShow = false;
window.onscroll = function(){
	if(getScrollTop() >= 400){
		if(!isShow){
			animate2(oHeader,'height',100);
			isShow = true;				
		}
		oHeader.className = 'container fixed';
	}else{
		if(isShow){
			// animate(oHeader,'height',0);
			oHeader.className = 'container';
			isShow = false;				
		}
	}
}
