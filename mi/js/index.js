


handleCart();
handleNav();
handleCarousel();
handleTime();

//处理购物车
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
			//显示购物车内容，假设购物车完全显示就获取到了购物车数据
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

//处理导航栏
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
				html +=	'			<img src="imagesjrx/ph1.jpg" alt="">';
				html +=	'		</a>';
				html +=	'	</div>';
				html +=	'	<p class="product-name">小米MIX3</p>';
				html +=	'	<p class="product-price">3299元起</p>';
				if(data[i].tag){
					html +=	'<span class="tag">新品</span>';
				}
				html +=	'</li>';
			}
			html += '</ul>';
			oNavContentContainer.innerHTML = html;
		}
	}

//处理轮播图
	function handleCarousel(){
		new Carousel({
			id:'carousel',
			aImg:['imagesjrx/b1.jpg','imagesjrx/b2.jpg','imagesjrx/b3.jpg'],
			width:1226,
			height:460,
			playDuration:5000
		});
	}

/*倒计时*/
	function handleTime(){
		var oTimeNum = document.querySelectorAll('.timer-num');
		var endDate = new Date('2018-12-24 20:50:00');
		var endtimes = endDate.getTime();
		var timer = 0
		function to2Str(num){
				return num < 10 ? '0'+ num : ''+ num;
			}
		function tonow(){
			var allMilsec = endtimes - Date.now();
			if(allMilsec < 0){
				allMilsec = 0;
				clearTimeout(timer);
			}
			var allSec = parseInt(allMilsec/1000);
			var iHour = parseInt(allSec/3600);
			var iMinute = parseInt(allSec%3600/60);
			var iSecond = allSec%3600%60;
			oTimeNum[0].innerHTML = to2Str(iHour);
			oTimeNum[1].innerHTML = to2Str(iMinute);
			oTimeNum[2].innerHTML = to2Str(iSecond);
		}
		timer = setInterval(tonow,1000);
		tonow();
	}
	
/*选项卡*/
	