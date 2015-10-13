/**
 * Created by ericpeters on 10/12/15.
 */
//function to embed the google map
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(45.117237, -93.402422),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'Furr Life Grooming Salon!'
    });
}

$(document).ready(function() {
    //calls the functionality for the google map to be embedded
    google.maps.event.addDomListener(window, 'load', initialize);
});