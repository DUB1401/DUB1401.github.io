var Releases = "";

Releases = Releases + "Тысячелетие$Глава 11. Умри, мамочка, умри! Или игрушка для двоих$06.06.2019$millenium=11$15.jpg@";
Releases = Releases + "Тысячелетие$Глава 10. Первый раб нового Бога или падение ангела крови$06.06.2019$millenium=10$15.jpg@";

Releases = Releases + "Вещает станция «Восход»$6. Умираю молодым$06.06.2019$broadcasting-station-sunrise=31$11.jpg@";
Releases = Releases + "Вещает станция «Восход»$5. Никто не вспомнит о тебе$05.06.2019$broadcasting-station-sunrise=30$11.jpg@";
Releases = Releases + "Вещает станция «Восход»$4. Дохлятина$22.04.2019$broadcasting-station-sunrise=29$11.jpg@";

Releases = Releases + "Тысячелетие$Глава 9. Спиритический сеанс или нам не следовало этого делать$21.04.2019$millenium=9$15.jpg@";
Releases = Releases + "Геймеры!$Пролог!$20.04.2019$gamers=1$27.jpg@";
//Releases = Releases + "Я побрился. Затем привёл домой старшеклассницу$Глава 7. Косметика$18.04.2019$i-shaved-then-i-brought-a-high-school-girl-home=8$20.jpg@";
Releases = Releases + "Тысячелетие$Глава 8. Легенда о Бугимене или дыхание в затылок$14.04.2019$millenium=8$15.jpg@";

Releases = Releases + "Вещает станция «Восход»$3. Поле брацкай крывi$12.04.2019$broadcasting-station-sunrise=28$11.jpg@";
Releases = Releases + "Вещает станция «Восход»$2. Никому$12.04.2019$broadcasting-station-sunrise=27$11.jpg@";

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