(function ($) {
	"use strict";

	/* ================================================================= */
	/*	Portfolio Filtering Hook
	/* =================================================================  */
	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="'
            + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	/* ================================================================= */
	/*	Portfolio Filtering Hook
	/* =================================================================  */
	setTimeout(function () {
		var filterizd = $('.filtr-container').filterizr({});
		//Active changer
		$('.filtr-control').on('click', function () {
			$('.filtr-control').removeClass("active");
			$(this).addClass("active");
		});
	}, 500);

	/* ================================================================= */
	/*	Testimonial Carousel
	/* =================================================================  */
	// Init the slider
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* ================================================================= */
	/*	Clients Slider Carousel
	/* =================================================================  */
	// Init the slider
	$('.clients-logo-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	});

	/* ================================================================= */
	/*	Company Slider Carousel
	/* =================================================================  */
	$('.company-gallery').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	});

	/* ================================================================= */
	/*	Awars Counter Js
	/* =================================================================  */
	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
				countNum: countTo
			},

			{
				duration: 1500,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});
	});

	/* ================================================================= */
	/*   Contact Form Validating
	/* ================================================================= */
	$('#contact-submit').click(function (e) {
		// Stop the form from being submitted
		e.preventDefault();

        // Making sure the fields are somewhat correct.
		var subject = $('#subject').val();
		var message = $('#message').val();
		if (subject.length == 0) {
			$('#subject').css("border-color", "#D8000C");
            return;
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			$('#message').css("border-color", "#D8000C");
            return;
		} else {
			$('#message').css("border-color", "#666");
		}

        // Now opening their mail client with the provided data.
        let uri = 'mailto:glowappshelp@gmail.com?subject='
            + encodeURIComponent(subject) + '&body='
            + encodeURIComponent(message);
        window.open(uri, '_blank');

        // Disable the submit button to avoid spamming and change the button
        // text.
        $('#contact-submit').hide();
        $('#contact-sent').show();
	});
})(jQuery);

window.marker = null;
