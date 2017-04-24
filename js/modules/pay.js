$(function(){
	var $basketItems = $(".basket-item.notify"),
		$firstItem = $basketItems.first(),
		$basketNotifys = $basketItems.filter(".notify"),
		$lines = $basketNotifys.find(".line"),
		$window = $(window);
	
	if($basketNotifys.length && $lines.length){
		$window.on("resize",function(){
			$lines.children().css("margin-right",-parseInt($firstItem.children(":eq(1)").width())-parseInt($firstItem.children(":eq(2)").width()));
		});
	}
	$window.trigger("resize");
});