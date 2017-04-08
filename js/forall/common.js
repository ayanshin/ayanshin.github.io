$(function(){
	$(".date-choose>div").slick({
		infinite:true,
		slidesToScroll:3,
		slidesToShow: 7,
		prevArrow:"<button class='slick-prev'/>",
		nextArrow:"<button class='slick-next'/>",
		/*responsive: [
			{
				breakpoint: 1600,
				settings: {slidesToShow: 7}
			},
			{
				breakpoint: 1280,
				settings: {slidesToShow: 5}
			},
			{
				breakpoint: 480,
				settings: {slidesToShow: 3}
			}
		]*/
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 7}
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5}
    },
    {
      breakpoint: 600,
      settings: {slidesToShow: 3}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
});