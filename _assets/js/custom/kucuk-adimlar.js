var kucukAdimlar = {
	swiper: {
		animateTime: 100,
		animate: function(){
			var initAnimate = function(){
				var timeOut = 100;
				setTimeout(function(){
					kucukAdimlar.swiper.$target.find(".animated").removeClass("animated fadeIn");
					var _img = kucukAdimlar.swiper.$target.find(".active .img-sub");
					_img.each(function(){
						var $this = $(this);
						timeOut += kucukAdimlar.swiper.animateTime;
						setTimeout(function(){
							$this.addClass("animated fadeIn");
						}, timeOut);								
					});
				}, 200);
			};
			initAnimate();
			this.$banner.on('changed.owl.carousel', function(event) {
				initAnimate();
			});
		},
		$banner: null,
		$target: $(".swiper .owl-carousel"),
		_controller: function(){
			var $this = this.$target;
			this.$banner = $this.owlCarousel({
			    loop:true,
			    nav:true,
			    items: 1,
			});
		},
		init: function(){
			this._controller();
			this.animate();
		},
	},
	init: function(){
		this.swiper.init();
	},
};

$(document).ready(function(){
	kucukAdimlar.init();
});