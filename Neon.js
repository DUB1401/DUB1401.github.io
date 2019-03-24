//Начальный стиль бокового меню.
var MenuMode;

function FlipMenu() {
    document.getElementById('AdaptiveMenu').style.left = "0";
}

function UnflipMenu() {

    document.getElementById('AdaptiveMenu').style.left = MenuMode;
    
}

var SubSearchArray = "Во имя завтрашнего дня=For the Sake of Tomorrow|Следы во времени=Time Steps";
var SubHrefArray = "for-the-sake-of-tomorrow/main.html|";

/**/
function Search() {
    var SearchArray = SubSearchArray.split('|');
    var HrefArray = SubHrefArray.split('|');

    var Elements = document.getElementsByClassName("DarkMatterUplineSearchElement");
    for (i = 0; i < Elements.length; i++) {
        Elements[i].remove();
    }
    
    /*Возвращение скруглённых углов формы поиска*/
    document.getElementById("SearchBox").style.borderRadius = "15px 15px 15px 15px";
    
    for (i = 0; i < SearchArray.length; i++) {
        var Mask = document.getElementById("SearchBox").value;
        if (SearchArray[i].indexOf(Mask) > -1 && Mask.length >= 3) {
            var Div = document.createElement('div');
            Div.className = "DarkMatterUplineSearchElement";
            var Link = document.createElement('a');
            Link.href = HrefArray[i];
            Link.innerHTML = SearchArray[i].split('=')[0];
            Link.className = "DarkMatterUplineSearchElement";
            Div.appendChild(Link);
            document.getElementById("SearchContainer").appendChild(Div);
            /*Установка прямых нижних углов формы поиска*/
            document.getElementById("SearchBox").style.borderRadius = "15px 15px 0 0";
        }
    }
}

/*Загружает текст в Footer сайта.*/
function PageDataUpdate() {
    document.getElementById("Downline").innerHTML="Copyright © 2017-2019. Created by Evolv Group & Powered by GitHub Pages.";
    document.getElementById("VK").href = "https://vk.com/evolv_group";
    document.getElementById("SearchBox").value = "";
    MenuMode = document.getElementById('AdaptiveMenu').style.left;
}

// file:///C:/Users/Влад/Documents/GitHub/DUB1401.github.io/read.html?novel=123+chapter=18

function LoadChapter() {
    //$('#Reader').load('https://dubos-update-server.github.io/Manual.html');

    //Сохранение свойств главы.
    var Volume = document.getElementById("volume_in").textContent;
    var Chapter = document.getElementById("chapter_in").textContent;
    //Удаление элементов-контейнеров.
    $('#volume_in').remove();
    $('#chapter_in').remove();
    //Установка параметров главы.
    document.getElementById("volume_off").textContent = Volume;
    document.getElementById("chapter_off").textContent = Chapter;
    document.title = Chapter;

    var Arguments = window.location.href.split('?')[1];
    
}