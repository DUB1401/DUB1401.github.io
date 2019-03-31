/*Слайдер изображений.
var Slides = document.querySelectorAll('#DarkMatterCoverSlides .DarkMatterCoverSlide');
var CurrentSlide = 0;
var SlideInterval = setInterval(NextSlide, 7000);
function NextSlide() {
    Slides[CurrentSlide].className = 'DarkMatterCoverSlide';
    CurrentSlide = (CurrentSlide + 1) % Slides.length;
    Slides[CurrentSlide].className = 'DarkMatterCoverSlide DarkMatterCoverShowing';
}
*/

var SlidesArray = document.querySelectorAll('.BookCover');
var CurrentFrame = 0;
var SlideInterval = setInterval(SlideCover, 7000);

function SlideCover() {
    SlidesArray[CurrentFrame].className = 'BookCover';
    CurrentFrame = (CurrentFrame + 1) % SlidesArray.length;
    SlidesArray[CurrentFrame].className = 'BookCover BookCoverActive';
}