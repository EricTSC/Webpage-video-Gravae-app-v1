var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 3000); // mudar a imagem a cada 3 segundos
}
