$(document).ready( function() {
		let first = $('#first')
		let h = first.height();
		let f1 = $('#first img:nth-child(1)');
		let f2 = $('#first img:nth-child(2)');
		let f3 = $('#first img:nth-child(3)');
		let second = $('#second')
		let s2 = $('#second div:nth-child(2)');
		let third = $('#third')
	$(window).on('scroll', function() {
		let x = $(window).scrollTop();
		
		if (x <= h/3) {
			f3.css('opacity', 1 - x/h*3)
			//first.removeClass('static');
		} else if ( h/3*2 >= x && x > h/3) {
			f2.css('opacity', 2 - x/h*3)
			first.removeClass('static');
			second.removeClass('moving');
		} else if ( h >= x && x > h/3*2 ) {
			first.addClass('static');
			second.addClass('moving').removeClass('static')
		} else if ( 7/6*h >= x && x > h ) {
			second.addClass('static').removeClass('moving');
		} else if ( 4*h >= x && x > 7/6*h ) {
			s2.css('width', (x - 7/6*h)/2 + 'vw').css('height', (x - 7/6*h)/2 + 'vw').css('transform', `translate(${((7/6*h) - x )/6}vw, ${((7/6*h) - x)/6}vw`)
		} else if ( 8*h >= x && x > 4*h ) {
			
		}
	});

	$('.draggable').on('mousedown', function(){
		let drag = $(this)
		let xa = drag.offset().left, ya = drag.offset().top
		drag.on('mousemove', function(ev) {
			console.log( ev.pageX, ev.pageY )
		})
	})
})