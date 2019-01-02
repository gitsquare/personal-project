
		var aImg =document.querySelectorAll('.carousel-imgs-item');
		var oLeftArrow=document.querySelector('.left-arrow');
		var oRightArrow=document.querySelector('.right-arrow');
		var aBtn=document.querySelector('.carousel-btn').children;
		var oCarousel = document.querySelector('.content');
		console.log(oCarousel)
		var timer =0;

		//当前图片
		var now =0;

		/* 切换函数*/

		function tab(){
			for(var i=0;i<aImg.length;i++){
				aImg[i].style.zIndex="0";
				aBtn[i].className='';
				aImg[i].style.opacity=0;
			}
			aImg[now].style.zIndex="3";
			aBtn[now].className='active';
			aImg[now].style.opacity=1;
		}
		oRightArrow.onclick=function(){
			now--;
			if (now<0) {
				now=aImg.length-1;
			}
			tab()
		}
		oLeftArrow.onclick=function(){
			now++;
			if (now>=aImg.length) {
				now=0;
			}
			tab()
		}
		//底部指示按钮事件
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				now=this.index;
				tab();
			}
		}
		timer=setInterval(oRightArrow.onclick,2000);
		oCarousel.onmouseover =function(){
			clearInterval(timer)
		}
		oCarousel.onmouseout =function(){
			timer=setInterval(oRightArrow.onclick,2000);
		}



	var aBtn1 = document.querySelectorAll('#tab-list li')
	var aContent = document.querySelectorAll('#tab-container')
	var oContent1 = document.querySelector('#content1')
	console.log(oContent1)
		for(var i=0;i<aBtn1.length;i++){
			aBtn1[i].index= i;
			aBtn1[i].onmouseover =function(){
				for(var j=0;j<aBtn1.length;j++){
					aBtn1[j].className ='';
					// oContent1[j].style.display ='none';
				}
				oContent1[this.index].style.display = 'block'
				
				// console.log(typeof this)
				this.className="active"
			}
		}


	