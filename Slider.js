/*Слайдер изображений.*/
var Slides = document.querySelectorAll('#DarkMatterCoverSlides .DarkMatterCoverSlide');
var CurrentSlide = 0;
var SlideInterval = setInterval(NextSlide, 7000);
function NextSlide() {
    Slides[CurrentSlide].className = 'DarkMatterCoverSlide';
    CurrentSlide = (CurrentSlide + 1) % Slides.length;
    Slides[CurrentSlide].className = 'DarkMatterCoverSlide DarkMatterCoverShowing';
}