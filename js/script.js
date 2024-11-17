// writeing effect

const words = ["Fast, Fresh, Instant", "Delivered to your mouth","Delivery first, Satisfaction all time",];
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

typingEffect();


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
	// autoplay: true,
	// autoplaySpeed: 4000,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows: false,
		}
	  },
  
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		}
	  },
	]
  });