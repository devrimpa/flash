// writeing effect

const words = ["Fast, Fresh, Instant", "Delivered to your mouth", "Delivery first, Satisfaction all time",];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function () {
		if (word.length > 0) {
			document.getElementById('word-braking').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function () {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word-braking').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

if ($(".writeing-effect").length) {
	typingEffect();
}


// logo auto slider
if ($(".slide").length) {
	new Splide('.slide', {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		//   perPage: 7,
		pagination: false,
		arrows: false,
		direction: 'ltr', // rtl
		autoWidth: true,
		autoScroll: {
			speed: 1.2,

		},
		//   breakpoints: {
		//     //1200: { arrows: false },
		//     991: { perPage: 5 },
		//     479: { destroy: true, perPage: 2 },
		//   },
	}).mount(window.splide.Extensions);
}



$('.slider-body').slick({
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});


// $(document).ready(function () {
// 	$(".column-one").slice(0, 8).show();
// 	$("#view-more").on("click", function (e) {
// 		e.preventDefault();
// 		$(".column-one:hidden").slice(0, 8).slideDown();
// 		if ($(".column-one:hidden").length == 0) {
// 			$("#view-more").css('visibility', 'hidden');
// 		}
// 	});

// })

// add class

$(".navbar-toggler").on('click', function () {
	$('body').toggleClass("body-fixed");
})



// for inner page

$(document).ready(function () {
	$(".column-two").slice(0, 4).show();
	$("#view-more").on("click", function (e) {
		e.preventDefault();
		$(".column-two:hidden").slice(0, 4).slideDown();
		if ($(".column-two:hidden").length == 0) {
			$("#view-more").css('visibility', 'hidden');
		}
	});

})

// fixed header

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 200) {
		$(".page-header").addClass("fixed");
	}
	else {
		$(".page-header").removeClass("fixed");
	}
})


