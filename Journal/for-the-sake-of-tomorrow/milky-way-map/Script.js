function ShowPlanetInfo(index) {
    $.get('https://dub1401.github.io/Journal/for-the-sake-of-tomorrow/milky-way-map/' + index + '.txt', function(data) {
        $('.PlanetInfo').html(data);
      });
}