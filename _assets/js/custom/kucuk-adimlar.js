var kucukAdimlar = {
	swiper: {
		animate: function(){

		},
		$target: $(".swiper .owl-carousel"),
		_controller: function(){
			var $this = this.$target;
			$this.owlCarousel({
			    loop:true,
			    nav:true,
			    items: 1,
			});
		},
		init: function(){
			this._controller();
		},
	},
	init: function(){
		this.swiper.init();
	},
};

$(document).ready(function(){
	kucukAdimlar.init();
});