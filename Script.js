/*Автослайдинг новостей.*/
/*=========================================================================================================================*/

var slides = document.querySelectorAll('#Slides .Slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);
function nextSlide() {
    slides[currentSlide].className = 'Slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'Slide Showing';
}
