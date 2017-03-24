$(function(){
	//	小屏幕下的下拉菜单
	var $menuOff = $('.header .header-in .menu-off');
	//获取下拉菜单对象(第一个直接子元素)
	var $downmenu = $('.nav');
	$menuOff.on('click',function(){
		$downmenu.slideDown(500);
	})
	//关闭下拉菜单
	var $close = $('.close');
	$close.on('click',function(){
		$(".nav").slideUp(500);
	})
	//案例分析效果
	var $caseItem = $('.case li');
	$caseItem.on('mouseover',function(){
		$(this).children('.case-summary').fadeIn();
	})
	$caseItem.on('mouseleave',function(){
		$(this).children('.case-summary').stop().fadeOut();
	})
	//头部导航滚动时候效果
	$(window).scroll(function(){
		var a = $(window).scrollTop();
		if(a >= 45){
			$('.header').css({'top':'0','backgroundColor':'rgba(0,0,0,0.8)'});
		}else{
			$('.header').css({'top':'45px','backgroundColor':'rgba(0,0,0,0.1)'});
		}
		if($(window).width() <= 768){
			$('.header').css({'top':'0','backgroundColor':'rgba(0,0,0,0.8)'});
		}
	})
	//轮播图
	var $slideItem = $('.bd .item');
	var $controlLi = $('.hd .control>li');
	var index = 0;
	var slide = setInterval(slideBar,3000)
	function slideBar(){
		if(index < 3){
			index++;
		}else{
			index = 0;
		}
		$slideItem.eq(index).fadeIn(3000).siblings('.item').hide();
		$controlLi.eq(index).addClass('on').siblings().removeClass('on');
	}
	//点击小圆点
	$controlLi.on({
		click: function(){
			var index = $(this).index();
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
			$slideItem.eq(index).fadeIn(3000).siblings('.item').hide();
		}
	})
	$slideItem.on('mouseover',function(){
		clearInterval(slide);
	})
	$slideItem.on('mouseout',function(){
		slide = setInterval(slideBar,3000);
	})
	//业务分类选项卡
	var $workItem = $('.work-item>ul>li');
	var $workDesc = $('.brand-design .brand-design-content');
	var images = ['../img/ic_ppsj.png','../img/ic_h5.png','../img/ic_app.png','../img/ic_wzkf.png'];
	$workItem.on({
		click: function(){
			var index = $(this).index();
			$workDesc.eq(index).fadeIn().siblings('.brand-design .brand-design-content').hide();
			$(this).children('a').addClass('active');
			$(this).siblings('li').children('a').removeClass('active');
			switch(index){
				case 0: $workItem.eq(0).find('i').css('backgroundImage','url(../static/img/ic_ppsj_02.png)');
						$workItem.eq(1).find('i').css('backgroundImage','url(../static/img/ic_h5_02.png)');
						$workItem.eq(2).find('i').css('backgroundImage','url(../static/img/ic_app_02.png)');
						$workItem.eq(3).find('i').css('backgroundImage','url(../static/img/ic_wzkf_02.png)');
					break;
				case 1: $workItem.eq(0).find('i').css('backgroundImage','url(../static/img/ic_ppsj.png)');
						$workItem.eq(1).find('i').css('backgroundImage','url(../static/img/ic_h5.png)');
						$workItem.eq(2).find('i').css('backgroundImage','url(../static/img/ic_app_02.png)');
						$workItem.eq(3).find('i').css('backgroundImage','url(../static/img/ic_wzkf_02.png)');
					break;
				case 2: $workItem.eq(0).find('i').css('backgroundImage','url(../static/img/ic_ppsj.png)');
						$workItem.eq(1).find('i').css('backgroundImage','url(../static/img/ic_h5_02.png)');
						$workItem.eq(2).find('i').css('backgroundImage','url(../static/img/ic_app.png)');
						$workItem.eq(3).find('i').css('backgroundImage','url(../static/img/ic_wzkf_02.png)');
					break;
				case 3: $workItem.eq(0).find('i').css('backgroundImage','url(../static/img/ic_ppsj.png)');
						$workItem.eq(1).find('i').css('backgroundImage','url(../static/img/ic_h5_02.png)');
						$workItem.eq(2).find('i').css('backgroundImage','url(../static/img/ic_app_02.png)');
						$workItem.eq(3).find('i').css('backgroundImage','url(../static/img/ic_wzkf.png)'); 
					break;
			}
		}
	})
	//当屏幕宽度小于768时候的banner
	var $bnrBox = $('.bd .item');
	var $bnrImg = $('.bd .item>a>img');
	var width = $(window).width();
	if(width < 768){
			$bnrBox.eq(0).find('a>img').attr('src','../static/img/home_banner.png');
			$bnrBox.eq(1).find('a>img').attr('src','../static/img/banner_s_01.jpg');
			$bnrBox.eq(2).find('a>img').attr('src','../static/img/banner_s_02.jpg');
		}
		else{
			$bnrBox.eq(0).find('a>img').attr('src','../static/img/banner_01.jpg');
			$bnrBox.eq(1).find('a>img').attr('src','../static/img/banner_02.jpg');
			$bnrBox.eq(2).find('a>img').attr('src','../static/img/banner_03.jpg');
		}
	$(window).resize(function(){
		var a = 2560 / 913,
		b = $(document).width(),
		c = b / a;
		e = c - 40 + "px";
		$(".banner .hd").css({top: e});
	})
})
