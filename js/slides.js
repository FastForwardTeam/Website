slideIndex = 1;

function plusSlides(n) {
  clearInterval(interval);    
  interval = setInterval(plusSlides, 4000);
  if(typeof n == "undefined") {
    n = 1;
  }
  showSlides(slideIndex += n);
}

function showSlides(n) {
  slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

interval = setInterval(plusSlides, 4000);
showSlides(slideIndex);
