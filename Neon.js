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

var SubSearchArray = "Во имя завтрашнего дня=For the Sake of Tomorrow|Забытый выбор=Forgotten Choice|Следы во времени=Time Steps|Тысячелетие=Millenium|Сетевая любовь=Online Love|Атлантида: До падения=Atlantis: Before the Falling|Пигмалион сажает семена=The Pygmalion Is Planting Seeds Pygmalion wa Tane wo Maku|Вещает станция «Восход»=Broadcasting statinon «Sunrise»|Я побрился. Затем привёл домой старшеклассницу=Hige wo Soru. Soshite Joshikousei wo Hirou I Shaved. Then I Brought a High School Girl Home|Pokemon GO: Возрождение=Pokemon GO: Rebirth|Геймеры!=Gamers!|Сказание о странствующем мастере ки=The Legend of the Wandering Ki Master";
var SubHrefArray = "for-the-sake-of-tomorrow|forgotten-choice|time-steps|millenium|online-love|atlantis-before-the-falling|the-pygmalion-is-planting-seeds|broadcasting-station-sunrise|i-shaved-then-i-brought-a-high-school-girl-home|pokemon-go-rebirth|gamers|the-legend-of-the-wandering-ki-master";

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
            Link.href = "../Books/" + HrefArray[i] + ".html";
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
            if (+Arguments[1] > 1) {
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
            if (+Arguments[1] < +decl) {
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
            if (document.getElementById('volume_in') != null) { var Volume = document.getElementById("volume_in").textContent;}
            var Chapter = document.getElementById("chapter_in").textContent;
            //Удаление элементов-контейнеров. 
            $('#novel_in').remove();
            { $('#volume_in').remove();}
            $('#chapter_in').remove();
            //Установка параметров главы.
            document.getElementById("novel_off").textContent = Novel;
             {document.getElementById("volume_off").textContent = Volume;}
            document.getElementById("chapter_off").textContent = Chapter;
            document.title = Chapter;
        });
    
    });

    
    
}

//Копирование строки в буфер обмена.
function TextCopy(URLtext) {
    var copytext = document.createElement('input')
    copytext.value = URLtext
    document.body.appendChild(copytext)
    copytext.select()
    document.execCommand('copy')
    document.body.removeChild(copytext)
}

//Копирование ссылки изображения в буфер обмена.
function CopyImageURL(index) {
    var Images = document.getElementsByTagName("img");
    TextCopy(Images[index - 1].src);
}