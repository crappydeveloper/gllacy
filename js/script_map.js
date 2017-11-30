function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(59.938726, 30.323105);

    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 17               // Зум по умолчанию. Возможные значения от 0 до 21
    };

    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.querySelector(".map"), mapOptions);

    //Создаем маркер
    var marker = new google.maps.Marker({
          position: centerLatLng,
          map: map
        });


}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
