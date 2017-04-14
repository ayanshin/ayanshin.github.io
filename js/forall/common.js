$(function(){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	
	$(".date-choose>div").slick({
		infinite:true,
		slidesToScroll:3,
		slidesToShow: 7,
		prevArrow:"<button class='slick-prev'/>",
		nextArrow:"<button class='slick-next'/>",
		//variableWidth: true,
		responsive: [
			{
				breakpoint: 1550,
				settings: {slidesToShow: 7}
			},
			{
				breakpoint: 1280,
				settings: {slidesToShow: 5}
			},
			{
				breakpoint: 600,
				settings: {slidesToShow: 3}
			}
		]
	});
	$(".slider").slick({
		infinite:true,
		slidesToScroll:1,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots:true,
		prevArrow:"<button class='slick-prev'/>",
		nextArrow:"<button class='slick-next'/>",
	});
	
    $(".date").datepicker($.extend(
		{
			inline: true,
			changeYear: true,
			changeMonth: true,
		},
		$.datepicker.regional['ru']
	));
	
	$(".nav-switch").on("click",function(){
		$(".mob-nav-container").fadeToggle();
	});
	$(".basket-switch").on("click",function(){
		$(".mob-basket-container").fadeToggle();
	});
	
	var $select=$(".country-select"),
		$fakeSelect=$(".country-select-span"),
		$fakeSelectCount = $("<span/>"),
		$values = $select.find("option:not(:disabled)"),
		$selectInfo = $(".countries");
	$select.hide();
	$fakeSelect.append(" ").append($fakeSelectCount).show();
	$fakeSelect.on("click",function(){
		var	$dialog = $("<div class='white-popup countries-select'/>"),
			$button = $("<div><button class='button primary'>Применить</button></div>");
		$values.each(function(){
			var $span = $("<span data-val='"+$(this).val()+"'><img src='"+$(this).data("image")+"' alt='"+$(this).html()+"'/>"+$(this).html()+"</span>");
			if($(this).prop("selected")){
				$span.addClass("active");
			}
			$dialog.append($span);
		});
		$dialog.on("click","span",function(){
			var $clicked = $(this),
				$option = $select.find("option[value='"+$clicked.data("val")+"']");
			if($clicked.hasClass("active")){
				$option.prop("selected",false);
			}else{
				$option.prop("selected",true);
			}
			$clicked.toggleClass("active");
		});
		
		$button.on("click","button",function(){
			$.magnificPopup.close();
			
		});
		$dialog.append($button);
		$.magnificPopup.open({
			items: {
				src: $dialog,
				type: 'inline'
			},
			callbacks: {
				beforeClose: function() {
					$select.trigger("change");
				}
			}
		});
	});
	$select.on("change",function(){
		$selectInfo.html("");
		$select.find("option:selected").each(function(){
			$selectInfo.append("<img src='"+$(this).data("image")+"' alt='"+$(this).html()+"' title='"+$(this).html()+"'/> ");
		});
		$fakeSelectCount.html($select.find("option:selected").length);
	});
	$select.trigger("change");
});