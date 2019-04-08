//Начальный стиль бокового меню.
var MenuMode;

function Pause(delay) {
    var startTime = Date.now();
    while (Date.now() - startTime < delay);
  }

function FlipMenu() {
    document.getElementById('AdaptiveMenu').style.left = "0";
}

function UnflipMenu() {

    document.getElementById('AdaptiveMenu').style.left = MenuMode;
    
}

var SubSearchArray = "Забытый выбор=Forgotten Choice|Следы во времени=Time Steps";
var SubHrefArray = "../Books/forgotten-choice.html|../Books/time-steps.html";

//Поиск новелл.
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
        Mask = Mask.toLowerCase();
        if (SearchArray[i].toLowerCase().indexOf(Mask) > -1 && Mask.length >= 3) {
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

//Загружает текст в Footer сайта.
function PageDataUpdate() {
    document.getElementById("Downline").innerHTML="Copyright © 2017-2019. Created by Evolv Group & Powered by GitHub Pages.";
    document.getElementById("VK").href = "https://vk.com/evolv_group";
    document.getElementById("SearchBox").value = "";
    MenuMode = document.getElementById('AdaptiveMenu').style.left;
}

//Загружает главу в читалку.
function LoadChapter() {
    //Чтение аргументов страницы.
    var Arguments = window.location.href.split('?')[1];
    Arguments = Arguments.split('=');
    //Составление адреса для чтения базы данных.
    var Path = "https://dub1401.github.io/Novels/" + Arguments[0] + "/" + Arguments[1] + ".txt";
    var Declaration = "https://dub1401.github.io/Novels/" + Arguments[0] + "/Declaratio.txt";
    
    $.get(Declaration, function(decl){
        $.get(Path, function(data) {

            var Tables = document.getElementsByClassName("SelectorTable");
            //Если глава не первая.
            if (Arguments[1] > 1) {
                //Создание кнопок "Предыдущая".
                var TDL = document.createElement('td');
                var AL = document.createElement('a');
                AL.className = "ButtonReader";
                AL.innerHTML = "<span class=\"ButtonReaderNavigate\">← Предыдущая</span>";
                AL.href = "read.html?" + Arguments[0] + "=" + (+Arguments[1] - 1);
                TDL.appendChild(AL);
                for (var i = 0; i < 2; i++) Tables[i].appendChild(TDL.cloneNode(true));
            }

            //Создание кнопок "Оглавление".
            var TD = document.createElement('td');
            var A = document.createElement('a');
            A.className = "ButtonReader";
            A.innerHTML = "<img class=\"ButtonReader\" src=\"Images/Book.png\"><span class=\"ButtonReaderMain\">Оглавление</span>";
            A.href = "Books/" +  Arguments[0] + ".html";
            TD.appendChild(A);
            for (var i = 0; i < 2; i++) Tables[i].appendChild(TD.cloneNode(true));

            //Если не последняя.
            if (Arguments[1] < decl) {
                //Создание кнопок "Следующая".
                var TDR = document.createElement('td');
                var AR = document.createElement('a');
                AR.className = "ButtonReader";
                AR.innerHTML = "<span class=\"ButtonReaderNavigate\">Следующая →</span>";
                AR.href = "read.html?" + Arguments[0] + "=" + (+Arguments[1] + 1);
                TDR.appendChild(AR);
                for (var i = 0; i < 2; i++) Tables[i].appendChild(TDR.cloneNode(true));
            }

            //Вставка текста.
            document.getElementById("Reader").innerHTML = data;
    
            //Сохранение свойств главы.
            var Novel = document.getElementById("novel_in").textContent;
            var Volume = document.getElementById("volume_in").textContent;
            var Chapter = document.getElementById("chapter_in").textContent;
            //Удаление элементов-контейнеров.
            $('#novel_in').remove();
            $('#volume_in').remove();
            $('#chapter_in').remove();
            //Установка параметров главы.
            document.getElementById("novel_off").textContent = Novel;
            document.getElementById("volume_off").textContent = Volume;
            document.getElementById("chapter_off").textContent = Chapter;
            document.title = Chapter;
        });
    
    });

    
    
}


$(function(){
  $('.BookLeftLayout').height($('.BookLeftLayout').width()/0.75);

  $(window).resize(function(){
    $('.BookLeftLayout').height($('.BookLeftLayout').width()/0.75);
  });
});


function VarticalAlignBookHeads() {
    var Boxes = document.getElementsByClassName('LibruaryBookName');
    
    for (var i = 0; i < Boxes.length; i++) {
        Boxes[i].style.height = "auto";
    }

    var Numero;

    if (Boxes.length % 4 == 0) {
        Numero = Boxes.length / 4;
    } else {
        Numero = Math.floor(Boxes.length / 4 + 1);
    }

    for (var u = 0; u < Numero; u++) {
        var Height = 0;
        for (var i = 4 * u; i < 4 * u + 4; i++) {
            if (i < Boxes.length && Boxes[i].offsetHeight > Height) {
                Height = Boxes[i].offsetHeight;
            }
        }

        for (var i = 4 * u; i < 4 * u + 4; i++) {
            if (i < Boxes.length) Boxes[i].style.height = Height + "px";
        }

    }

    
}
