import $ from 'jquery';

$(() => {

	$(document).ready(function() {
	
		var imgSrc = "./images/card.png";
		var img = $('<img>').attr('src', imgSrc);
		$('.game__cart').append(img);

		for (var i = 0; i < 3; i++) {
			$('.game__cart').append(img.clone());
		}
	});
});
