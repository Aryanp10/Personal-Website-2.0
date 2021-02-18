window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("nav_menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// PROJECTS LARGE BOX

function showBookingDB() {
  div = document.getElementById('Booking');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showCollegeBuddy() {
  div = document.getElementById('College');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('Booking').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showPersonalWeb() {
  div = document.getElementById('Personal');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Booking').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showWebScraper() {
  div = document.getElementById('WebS');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"
  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('Booking').style.display = "none"
    div.style.display="block"
  }
}

// MODAL
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}