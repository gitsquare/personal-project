handleCart();

function handleCart(){
	var oCart = document.querySelector('.top .cart');
	var oCartLink = document.querySelector('.top .cart .cart-box a');
	var oCartContent = document.querySelector('.top .cart .cart-content');
	var oLoader = oCartContent.querySelector('.loader');
	var oEmptyCart = oCartContent.querySelector('.empty-cart');
	oCart.onmouseenter = function(){
		oCartLink.style.backgroundColor = '#fff';
		oCartLink.style.color = '#ff6700';
		oLoader.style.display = 'block';
		animate(oCartContent,{height:100},true,function(){
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'block';
		});
	}
	oCart.onmouseleave = function(){
		oCartLink.style.backgroundColor = '#424242';
		oCartLink.style.color = '#b0b0b0';
		animate(oCartContent,{height:0},true);
		oLoader.style.display = 'none';
		oEmptyCart.style.display = 'none';
	}
}

function animate2(obj,attr,target){
	clearInterval(obj.timer);
	var ispeed = 0;
	obj.timer = setInterval(function(){
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(current > target){
			iSpeed = -5;
		}else{
			iSpeed = 5;
		}
		if(Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
			obj.style.opacity = target / 100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style.opacity = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
		}
	},30)
}
