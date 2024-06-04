let coordinates = {}

$(document).ready(function () {
    get_coordinates();
    get_weather();
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }
}

function get_weather () {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=6be9fac2c278d09c65cdb4ae67421c26`,
        type: "get",
        success: function (response) {

            var place = response.name;
            var weather = `${response.weather[0].main}`;
            var weatherDescription = `${response.weather[0].description}`;

            var temp = `${Math.floor(parseInt(response.main.temp) - 273.15)}\u00B0C`;
            var temp_min = `${Math.floor(parseInt(response.main.temp_min) - 273.15)}\u00B0C`;
            var temp_max = `${Math.floor(parseInt(response.main.temp_max) - 273.15)}\u00B0C`;
            var humidity = `${Math.floor(parseInt(response.main.humidity))}`;
            var pressure = `${Math.floor(parseInt(response.main.pressure))}`;
            var wind_speed = `${Math.floor(parseInt(response.wind.speed))}`;

            var wind_degrees = parseInt((response.wind.deg/22.5)+0.5);
            var directions = ["North (N)","North-Northeast (NNE)","North-East (NE)","East-Northeast (ENE)","East (E)","East-Southeast (ESE)","South-East (SE)","South-Southeast (SSE)","South (S)","South-Southwest (SSW)","South-West (SW)","West-Southwest (WSW)","West (W)","West-Northwest (WNW)","Noth-West (NW)","North-Northwest (NNW)"];
            var wind_direction = directions[(wind_degrees%16)];

        }
    });
}