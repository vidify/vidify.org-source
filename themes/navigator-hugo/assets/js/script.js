'use strict';


window.addEventListener('load', e => {
	/* ================================================================= */
	/*	Portfolio Filtering Hook
	/* =================================================================  */

	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="'
            + $(this).attr('data-video') + '?autoplay=1"></iframe>';
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
	/*	Download buttons
	/* =================================================================  */

    // Obtaining the version and link to the latest GitHub release with
    // the official GitHub API. It has a limit of 60 requests/hour without
    // authentication, so it's possible that this will fail.
    function parseGithub(btn) {
        const repo = btn.getAttribute('github-repo');
        const match = btn.getAttribute('github-match');

        let request = new XMLHttpRequest();
        request.open('GET', 'https://api.github.com/repos/' + repo
            + '/releases');
        // If the request doesn't fail, the version and href are properly set
        request.onload = function() {
            const data = JSON.parse(this.responseText);

            // Iterating the releases to find the appropiate asset.
            for (const release of data) {
                const tagName = release.tag_name;
                const asset = release.assets.find(asset => asset.name.includes(match))

                if (asset && tagName) {
                    btn.setAttribute('href', asset.browser_download_url);

                    const node = document.createElement('span');
                    const text = document.createTextNode(tagName);
                    node.classList.add('download-btn-version');
                    node.appendChild(text);
                    btn.appendChild(node);

                    break;
                }
            }
        }
        request.send();
    }

    // The Play Store doesn't have an official API so nothing can be done
    // to obtain the version safely. It's left here in case some API is
    // released in the future to obtain the version name.
    function parsePlayStore(btn) {
    }

    Array.from(document.getElementsByClassName('download-btn')).forEach(btn => {
        const type = btn.getAttribute('btn-type');
        switch (type) {
            case "github":
                parseGithub(btn);
                break;
            case "play_store":
                parsePlayStore(btn);
                break;
            default:
                break;
        }
    });

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

    document.getElementById('contact-submit').addEventListener('click', e => {
        // Stop the form from being submitted
        e.preventDefault();

        // Making sure the fields are somewhat correct.
        const errColor = "#D8000C";
        const okColor = "#666";
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const helpMsg = document.getElementById('contact-help');

        if (subject.value.length == 0) {
            subject.style.borderColor = errColor;
            return;
        }
        subject.style.borderColor = okColor;

        if (message.value.length == 0) {
            message.style.borderColor = errColor;
            return;
        }
        message.style.borderColor = okColor;

        // Now opening their mail client with the provided data.
        let uri = 'mailto:yesus19@hotmail.es?subject='
            + encodeURIComponent(subject) + '&body='
            + encodeURIComponent(message);
        window.open(uri, '_blank');

        // Show a message with help in case it didn't work.
        helpMsg.style.display = 'block'
    });
});
