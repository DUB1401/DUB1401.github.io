var Releases = "";

Releases = Releases + "Последний император Сэнгоку$Пролог: Ниндзя в столице$03.05.2020$the-last-emperor-sengoku=54$29.jpg@";
Releases = Releases + "Последний император Сэнгоку$Эпилог: Воссточная экспедиция$02.05.2020$the-last-emperor-sengoku=53$29.jpg@";

Releases = Releases + "Вещает станция «Восход»$8. Девочка с гитарой$23.04.2020$broadcasting-station-sunrise=33$11.jpg@";
Releases = Releases + "Сказание о странствующем мастере ки$Глава 49. Божественные кузни$21.04.2020$the-last-emperor-sengoku=50$29.jpg@";

Releases = Releases + "Сказание о странствующем мастере ки$Глава 48. Ускользая от трудностей$14.04.2020$the-last-emperor-sengoku=49$29.jpg@";
Releases = Releases + "Сказание о странствующем мастере ки$Глава 47. Осада Серпентхольма$13.04.2020$the-last-emperor-sengoku=48$29.jpg@";

Releases = Releases + "Сказание о странствующем мастере ки$Глава 46. Да, я внебрачная дочь, и что с того?$09.04.2020$the-last-emperor-sengoku=47$29.jpg@";

Releases = Releases + "Сказание о странствующем мастере ки$Глава 45. Как снег на голову$25.03.2020$the-last-emperor-sengoku=46$29.jpg@";
Releases = Releases + "Сказание о странствующем мастере ки$Глава 44. Глина и немного мошенничества$25.03.2020$the-last-emperor-sengoku=45$29.jpg@";

Releases = Releases + "Сказание о странствующем мастере ки$Глава 43. Винные откровения$20.03.2020$the-last-emperor-sengoku=44$29.jpg@";

//Releases = Releases + "Зима юности Мацуи-куна$Глава 1. Промежуточные тесты$18.12.2019$the-winter-of-matsui-kuns-youth=2$33.jpg@";
//Releases = Releases + "Арифурэта: Сильнейший ремесленник в мире$Бонусная история. Страшный кошмар в бездне$08.12.2019$arifureta-shokugyou-de-sekai-saikyou=33$30.jpg@";
//Releases = Releases + "Аватар короля: Ради славы$Глава 3. Единожды став друзьями, остались противниками на всю жизнь. Часть 2$29.11.2019$the-kings-avatar-for-the-glory=3$32.jpg@";
//Releases = Releases + "Дневник потерянных глаз$Глава 3. Аномальная активность$07.17.2019$diary-of-lost-eyes=4$31.jpg@";
//Releases = Releases + "Вещает станция «Восход»$7. Правильно$19.08.2019$broadcasting-station-sunrise=32$11.jpg@";
//Releases = Releases + "Геймеры!$Глава 1. Амано Кэйто и люди, на которых равняются. Часть первая$06.06.2019$gamers=2$27.jpg@";
//Releases = Releases + "Я побрился. Затем привёл домой старшеклассницу$Глава 7. Косметика$18.04.2019$i-shaved-then-i-brought-a-high-school-girl-home=8$20.jpg@";


Releases = Releases.slice(0, -1);
var ReleaseArray = Releases.split('@');

function CreatReleaseBlock(options) {
    var Table = document.createElement('table');
    Table.className = "NewReleases";
    Table.cellSpacing = "0";
    var Tr = document.createElement('tr');

    var TdFirst = document.createElement('td');
    TdFirst.className = "NewReleasesCover";
    var Img = document.createElement('img');
    Img.className = "NewReleasesCover";
    Img.src = "https://dubostorage001.github.io/Covers.fol/" + options.split('$')[4];
    TdFirst.appendChild(Img);
    Tr.appendChild(TdFirst);

    var TdSecond = document.createElement('td');
    TdSecond.className = "NewReleasesText";
    var H2 = document.createElement('h2');
    H2.className = "NewReleasesText";
    H2.innerHTML = options.split('$')[0] + "<span class=\"NewReleasesText\">" + options.split('$')[2] + "</span>";
    TdSecond.appendChild(H2);
    var P = document.createElement('p');
    P.className = "NewReleasesText";
    P.innerText = options.split('$')[1];
    TdSecond.appendChild(P);
    Tr.appendChild(TdSecond);

    var TdThird = document.createElement('td');
    TdThird.className = "NewReleasesButton";
    TdThird.innerHTML = "<button class=\"NewReleasesButton\" onclick=\"window.location.href='read.html?" + options.split('$')[3] + "'\">Читать</button>";
    Tr.appendChild(TdThird);

    Table.appendChild(Tr);
    return Table;
}

function LoadReleases() {
    for (var i = 0; i < ReleaseArray.length; i++) {
        document.getElementById("Releases").appendChild(CreatReleaseBlock(ReleaseArray[i]));
    }
    
}