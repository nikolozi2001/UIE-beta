'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

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