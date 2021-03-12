
navigation = () => {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-links');
    const introTexts = document.querySelectorAll('.main-intro-text');
    const scrollButton = document.getElementById('scroll-top-button');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-line');
        navBar.classList.toggle('nav-links-open');
    });

    introFade = () => {
        introTexts.forEach((introText, index) => {
            introText.style.animation = `textpop 0.4s ease ${index / 5 + 0.5}s forwards`;
        });
    };

    window.addEventListener('scroll', function () {
        let scrolledY = pageYOffset;

        if (scrolledY > 30) {
            scrollButton.classList.add('scroll-button-active');
        } else {
            scrollButton.classList.remove('scroll-button-active');
        }

        scrollButton.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });

    });

    introFade();
};


navigation();
// slider js script
var slideIndex = 1;
	showDivs(slideIndex);
	
	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}
	
	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
	  }
	  x[slideIndex-1].style.display = "block";  
	}
