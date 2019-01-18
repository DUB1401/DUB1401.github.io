/*Копирование аргумента в буфер обмена.*/
function TextCopy(URLtext) {
        var copytext = document.createElement('input')
        copytext.value = URLtext
        document.body.appendChild(copytext)
        copytext.select()
        document.execCommand('copy')
        document.body.removeChild(copytext)
    }

/*Загружает текст в Footer сайта.*/
function DownlineUpdate() {
    document.getElementById("Downline").innerHTML="Copyright 2017-2019. Все права защищены. Created by DUBO ProjectX & Powered by GitHub Pages.";
}