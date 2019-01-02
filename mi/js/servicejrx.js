handleCart();
handleNav();
handleCarousel();
handleCate();


//购物车
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

//导航栏
function handleNav(){
		var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
		var oNavContent = document.querySelector('.header .header-nav-content');
		var oNavContentContainer = oNavContent.querySelector('.container');
		var hideTimer = 0;
		var loadTimer = 0;
		for(var i = 0;i<aNavItem.length-2;i++){
			aNavItem[i].index = i;
			aNavItem[i].onmouseenter = function(){
				clearTimeout(hideTimer);
				oNavContent.style.borderTop = '1px solid #fff';
				oNavContentContainer.innerHTML = '<div class="loader"></div>';
				animate(oNavContent,{height:180},true,function(){
					oNavContent.style.overflow = 'visible';
				});
				//模拟数据加载
				var index = this.index;
				//去除不必要的加载
				clearTimeout(loadTimer);
				var loadTimer = setTimeout(function(){
					loadData(index);
				},500)
			}
			aNavItem[i].onmouseleave = function(){
				hideNavContent();
			}
		}
		oNavContent.onmouseenter = function(){
			clearTimeout(hideTimer);
		}
		oNavContent.onmouseleave = function(){
			hideNavContent();
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
			var data = aNavItemDate[index];
			var html = '<ul>';
			for(var i = 0;i<data.length;i++){
				html +=	'<li>';
				html +=	'	<div class="img-box">';
				html +=	'		<a href="#">';
				html +=	'			<img src=" '+data[i].img+' " alt="">';
				html +=	'		</a>';
				html +=	'	</div>';
				html +=	'	<p class="product-name">'+data[i].name+'</p>';
				html +=	'	<p class="product-price">'+data[i].price+'</p>';
				if(data[i].tag){
					html +=	'<span class="tag">'+data[i].tag+'</span>';
				}
				html +=	'</li>';
			}
			html += '</ul>';
			oNavContentContainer.innerHTML = html;
		}
	}

//轮播图
function handleCarousel(){
		new Carousel({
			id:'carousel',
			aImg:['imagesjrx/c1.jpg','imagesjrx/b2.jpg','imagesjrx/c2.jpg'],
			width:1226,
			height:460,
			playDuration:5000
		});
	}

//处理分类面板
	function handleCate(){
		var aCateItem = document.querySelectorAll('.header-nav .header-nav-category .cate .cate-item');
		var oCateContent = document.querySelector('.header-nav .header-nav-category .cate-content');
		var oCateBox = document.querySelector('.header-nav .header-nav-category .cate-box');
		for(var i = 0;i<aCateItem.length;i++){
			aCateItem[i].index = i;
			aCateItem[i].onmouseenter = function(){
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
				oCateContent.style.display = 'block';
				this.className = 'cate-item active'
				loadData(this.index);
			}
			oCateBox.onmouseleave = function(){
				oCateContent.style.display = 'none';
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
			}
		}
		function loadData(index){
			var data = aCateItemDate[index];
			var html = '<ul>';
			for(var k = 0;k<data.length;k++){
				html +=	'<li>';
				html +=	'	<a href="'+data[k].url+'">';
				html +=	'		<img src="'+data[k].img+'" alt="">';
				html +=	'		<span>'+data[k].name+'</span>';
				html +=	'	</a>';
				html +=	'</li>';
			}
				html += '</ul>';
			oCateContent.innerHTML = html;
		}
	}
