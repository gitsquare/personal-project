handleCart();
handleNav();
handleNav();


//处理购物车
function handleCart(){
	//1.获取购物车
	var oCart = document.querySelector('.top .cart');
	var oCarLink = document.querySelector('.top .cart .cart-box a') ;
	var oCarContent =document.querySelector('.top .cart .cart-content');
	var oEmptCart = document.querySelector('.top .cart .empty-cart');
	var oEmptContent = document.querySelector('.top .cart .cart-content');
	var oLoading = document.querySelector('.top .cart .cart-content .loader')

	oCart.onmouseenter = function(){
		//改变购物车图标背景色字体颜色
		oCarLink.style.background = '#fff';
		oCarLink.style.color = '#ff6700';
		oLoading.style.display = 'block';
		animate(oEmptContent,{height:100},true,function(){
			oEmptCart.style.display = 'block';
			oLoading.style.display = 'none';
		});
	}
	oCart.onmouseleave = function(){
		oCarLink.style.background = '#424242';
		oCarLink.style.color = '#fff';
		animate(oEmptContent,{height:0},true,function(){
			oLoading.style.display = 'none';
			oEmptCart.style.display = 'none';
		});
	}
}
//处理导航
function handleNav(){
	//获取导航列表
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContentContainer = oNavContent.querySelector('.container')
	var hideTimer = 0;
	var loadTimer = 0;
	//批量监听列表事件
	for (var i = 0 ; i<aNavItem.length-2; i++) {
		//鼠标移入事件
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearTimeout(hideTimer)
			oNavContent.style.borderTop = '1px solid #ccc';
			oNavContentContainer.innerHTML='<div class="loader"></div>';
			animate(oNavContent,{height:180},true,function(){
				oNavContent.style.overflow = 'visible';
			})
			//模拟加载数据
			var index = this.index;
			//去除不必要加载
			clearTimeout(loadTimer)
			loadTimer = setTimeout(function(){
				loadData(index)
			},500)
		}
		//鼠标移出事件
		aNavItem[i].onmouseleave = function(){
			hideNavContent()
		}
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hideTimer)
	}
	oNavContent.onmouseleave = function(){
		hideNavContent()
	}
	function hideNavContent(){
		hideTimer = setTimeout(function(){
			oNavContent.style.overflow = 'hidden';
			animate(oNavContent,{height:0},true,function(){
				oNavContent.style.borderTop = 'none';
			})
		},500)
	}
	function loadData(index){
		var data = aNavItemData[index]
		console.log(data)
		var html = '<ul>';
		for(var i = 0 ;i<data.length;i++){
			html+='<li>';
			html+=	'<div class="img-box">';
			html+=		'<a href="'+data[i].url+'">';
			html+=			'<img src="'+data[i].img+'" alt="">';
			html+=		'</a>';
			html+=	'</div>';
			html+=	'<p class="product-name">'+data[i].name+'</p>';
			html+=	'<p class="product-price">'+data[i].price+'</p>';
			if (data[i].tag) {
				html+=	'<span class="tag">'+data[i].tag+'</span>'
			}
			html += '</li>'
		}
		html += '</ul>'
		oNavContentContainer.innerHTML = html;
	}
}
//处理导航列表
function handleNav(){
	//获取导航列表
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContentContainer = oNavContent.querySelector('.container')
	var hideTimer = 0;
	var loadTimer = 0;
	//批量监听列表事件
	for (var i = 0 ; i<aNavItem.length-2; i++) {
		//鼠标移入事件
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearTimeout(hideTimer)
			oNavContent.style.borderTop = '1px solid #ccc';
			oNavContentContainer.innerHTML='<div class="loader"></div>';
			animate(oNavContent,{height:180},true,function(){
				oNavContent.style.overflow = 'visible';
			})
			//模拟加载数据
			var index = this.index;
			//去除不必要加载
			clearTimeout(loadTimer)
			loadTimer = setTimeout(function(){
				loadData(index)
			},500)
		}
		//鼠标移出事件
		aNavItem[i].onmouseleave = function(){
			hideNavContent()
		}
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hideTimer)
	}
	oNavContent.onmouseleave = function(){
		hideNavContent()
	}
	function hideNavContent(){
		hideTimer = setTimeout(function(){
			oNavContent.style.overflow = 'hidden';
			animate(oNavContent,{height:0},true,function(){
				oNavContent.style.borderTop = 'none';
			})
		},500)
	}
	function loadData(index){
		var data = aNavItemData[index]
		console.log(data)
		var html = '<ul>';
		for(var i = 0 ;i<data.length;i++){
			html+='<li>';
			html+=	'<div class="img-box">';
			html+=		'<a href="'+data[i].url+'">';
			html+=			'<img src="'+data[i].img+'" alt="">';
			html+=		'</a>';
			html+=	'</div>';
			html+=	'<p class="product-name">'+data[i].name+'</p>';
			html+=	'<p class="product-price">'+data[i].price+'</p>';
			if (data[i].tag) {
				html+=	'<span class="tag">'+data[i].tag+'</span>'
			}
			html += '</li>'
		}
		html += '</ul>'
		oNavContentContainer.innerHTML = html;
	}
}