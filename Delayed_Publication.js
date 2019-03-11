/*
Установите между закрывающими тегами body и html для отложенной публикации.
<script src="../Delayed_Publication.js"></script>
<script>SetDelayedDate("DD MM YEAR HOURS:MINUTS");</script>
*/

function SetDelayedDate(TextDate) {
    var Delayed_Date = new Date(TextDate);
    if (new Date() < Delayed_Date) {
        document.body.innerHTML = '<div class="DelayedPublication">Данная глава находится на стадии отложенной публикации и будет доступна в следующую дату: ' + TextDate + '. <button class="DelayedPublication" onclick="window.location.href=\'main.html\'\">Назад</button></div>';
    }
}

