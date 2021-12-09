$(function(){
	// 메인 비주얼 슬라이드
	$('.visual > ul').slick({
		arrows:false,
		autoplay: false,
		dots:false,
		speed:1000,
		autoplaySpeed:4000
		// responsive: [
		// 	{
		// 	  breakpoint: 891,
		// 	  settings: {
		// 		arrows:false,
		// 	  }
		// 	},
		// 	{
		// 	  breakpoint: 641,
		// 	  settings: {
		// 		arrows:false,
		// 		dots:false,
		// 	  }
		// 	}
		// ]

	});

	//크디 탭
	var tabBtn = $('.con_left ul li'),
		tabCon = $('.con_right > div');

	tabBtn.on('click',function(){
		var i = $(this).index();
		
		tabBtn.removeClass('on').eq(i).addClass('on'); 
		tabCon.hide().eq(i).show(); 
	});
	tabBtn.eq(0).trigger('click');
});

//탭메뉴
(function($){

	$.defaults = {
			active_class : "active"
	}

	$.fn.myTab = function(opt){

			option = $.extend({}, $.defaults, opt);
			new Tab(this, option);
			return this;
	}

	function Tab(selector, option){       
			this.init(selector, option);
			this.bindingEvent();
	}
	
	Tab.prototype.init= function(selector, option){
			this.opt = option;
			this.frame = selector;
			this.btns = this.frame.find("ul>li");
			this.boxs = this.frame.find("div>div");
	}
	
	Tab.prototype.bindingEvent = function(){   
			var self = this;
			
			self.btns.on("click", function(e){
					e.preventDefault();    
					var i = $(this).index();
					self.activation(i);   
			});
	}
	
	Tab.prototype.activation= function(index){
			this.btns.removeClass(this.opt.active_class);
			this.btns.eq(index).addClass(this.opt.active_class);
	
			this.boxs.removeClass(this.opt.active_class);
			this.boxs.eq(index).addClass(this.opt.active_class);
	}
})(jQuery);

$(document).ready(function(){
	$("#tab1").myTab({
			active_class : "on"
	});

	$("#tab2").myTab({
		active_class : "on"
});


})


// ##########numberCounting##############
var isVisible = false;
	//스크롤 발생 이벤트 처리
   $(window).on('scroll',function() {
    if (checkVisible($('.num_cnt'))&&!isVisible) {
        numStart();
        isVisible=true;
	    }
	});
	
	function checkVisible( elm, eval ) {
	    eval = eval || "above";
	    var viewportHeight = $(window).height(), // Viewport Height
	        scrolltop = $(window).scrollTop(), // Scroll Top
	        y = $(elm).offset().top,
	        elementHeight = $(elm).height();   
	   
	    if (eval == "object visible") {return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));}
	    if (eval == "above") {return ((y+300 < (viewportHeight + scrolltop)));}
	}
function numStart(){
	$({ countNum: $('.numCnt_1').html() }).animate({ countNum: 15422 }, {
		duration: 2000,
		easing: 'linear',
		step: function () {
		$('.numCnt_1').html(thousandSeparatorCommas(Math.floor(this.countNum)));
	},
	complete: function () {
		$('.numCnt_1').html(thousandSeparatorCommas(this.countNum));
		//alert('finished');
	}
	});
	
	$({ countNum: $('.numCnt_2').html() }).animate({ countNum: 20000 }, {
		duration: 2000,
		easing: 'linear',
		step: function () {
		$('.numCnt_2').html(thousandSeparatorCommas(Math.floor(this.countNum)));
	},
	complete: function () {
		$('.numCnt_2').html(thousandSeparatorCommas(this.countNum));
		//alert('finished');
	}
	});

	$({ countNum: $('.numCnt_3').html() }).animate({ countNum: 400000 }, {
		duration: 2000,
		easing: 'linear',
		step: function () {
		$('.numCnt_3').html(thousandSeparatorCommas(Math.floor(this.countNum)));
	},
	complete: function () {
		$('.numCnt_3').html(thousandSeparatorCommas(this.countNum));
		//alert('finished');
	}
	});
	
	$({ countNum: $('.numCnt_4').html() }).animate({ countNum: 98 }, {
		duration: 2000,
		easing: 'linear',
		step: function () {
		$('.numCnt_4').html(thousandSeparatorCommas(Math.floor(this.countNum)));
	},

	
	complete: function () {
		$('.numCnt_4').html(thousandSeparatorCommas(this.countNum));
		//alert('finished');
	}
	});
	
	function thousandSeparatorCommas ( number ){ 
	
		var string = "" + number;  // 문자로 바꾸기. 
	
		string = string.replace( /[^-+\.\d]/g, "" )  // ±기호와 소수점, 숫자들만 남기고 전부 지우기. 
	
		var regExp = /^([-+]?\d+)(\d{3})(\.\d+)?/;  // 필요한 정규식. 
	
		while ( regExp.test( string ) ) string = string.replace( regExp, "$1" + "," + "$2" + "$3" );  // 쉼표 삽입. 
	
		return string; 
	}
	
}
