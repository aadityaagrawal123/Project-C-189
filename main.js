let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `farming_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 4
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result', function(e) {
            destination = e.result.center
        })
    );
    
    // Showing the weather of major places on the map

    // Delhi
    this.show_weather(28.69308718947922, 77.2277467162606, map, "Delhi");

    // Mumbai
    this.show_weather(19.085422054618302, 72.87567493494788, map, "Mumbai")

    // Kolkata
    this.show_weather(22.581379318086984, 88.37275424423405, map, "Kolkata")

    // Chennai
    this.show_weather(13.086267548384619, 80.28315082242847, map, "Chennai")

    // Ahmedabad
    this.show_weather(23.031532994101187, 72.58865143917798, map, "Ahmedabad")

    // Indore
    this.show_weather(22.72895496477136, 75.85147268827022, map, "Indore")

    // Guwahti
    this.show_weather(26.306577519536987, 92.71289153923021, map, "Guwahti")

    // Jaipur
    this.show_weather(26.40505106366278, 75.7407764238791, map, "Jaipur")

    // Jodhpur
    this.show_weather(26.244164587050395, 73.02916570159402, map, "Jodhpur")

    // Lucknow
    this.show_weather(26.848596483935573, 80.94592899340249, map, "Lucknow")

    // Hubbali
    this.show_weather(15.42011614237699, 75.00854607248753, map, "Hubbali")
    
    // Banglore
    this.show_weather(13.487019098822957, 77.74254745437425, map, "Banglore")
    
    // Coimbatore
    this.show_weather(11.089893595337328, 76.9048061593733, map, "Coimbatore")

    // Thiruvananthapuram
    this.show_weather(8.498235148044946, 76.90784881257326, map, "Thiruvananthapuram")

    // Visakhapatnam
    this.show_weather(18.009650404089474, 83.36347654972295, map, "Visakhapatnam")

    // Hyderabad
    this.show_weather(17.37722604332409, 78.22795256936972, map, "Hyderabad")

    // Vijayawada
    this.show_weather(16.5061986064232, 80.63011686091635, map, "Vijayawada")

    // Akola
    this.show_weather(20.747686830121506, 76.97789644986956, map, "Akola")

    // Solapur
    this.show_weather(17.786241501595914, 75.93018502109194, map, "Solapur")

    // Thanjavur
    this.show_weather(10.82400358250746, 79.20497274123309, map, "Thanjavur")

    // Karimnagar
    this.show_weather(18.50783109523796, 79.15947558699885, map, "Karimnagar")

    // Jamnagar
    this.show_weather(22.473357772669736, 70.06252898191661, map, "Jamnagar")

    // Bikaner
    this.show_weather(28.12810876293984, 73.41879140518462, map, "Bikaner")

    // Jabalpur
    this.show_weather(23.316868816463202, 79.96233007274431, map, "Jabalpur")

    // Prayagraj
    this.show_weather(25.605236199009852, 81.4662030361079, map, "Prayagraj")

    // # Bareilly
    this.show_weather(28.632889039766905, 79.79241982784208, map, "Bareilly")

    // Gwallior
    this.show_weather(26.219605995240077, 78.1847020567645, map, "Gwallior")

    // Mangaluru
    this.show_weather(13.079504752171411, 74.64586071891492, map, "Mangaluru")

    // Anantapur
    this.show_weather(14.741551888033385, 77.65360665432762, map, "Anantapur")

    // Nasik
    this.show_weather(20.29198997119708, 73.98557019618318, map, "Nasik")

    // Udaipur
    this.show_weather(24.5870363905181, 73.7069277181675, map, "Udaipur")

    // Chandrapur
    this.show_weather(19.962202487405094, 79.29647951901204, map, "Chandrapur")

    // Ratnagiri
    this.show_weather(16.993113728378134, 73.30739985943885, map, "Ratnagiri")

    // Hisar
    this.show_weather(29.149569492492017, 75.71776930479169, map, "Hisar")

    // Jathlana
    this.show_weather(30.024302419514914, 77.242030991397, map, "Jathlana")

    // Amritsar
    this.show_weather(31.3294326584852, 75.56750896037, map, "Amritsar")

    // Muktsar
    this.show_weather(30.46975684172987, 74.51489895593504, map, "Muktsar")

    // Shimla
    this.show_weather(31.22726447068399, 77.05989132799607, map, "Shimla")

    // Manali
    this.show_weather(32.27480987550674, 77.23457877646818, map, "Manali")

    // Kedarnath
    this.show_weather(30.734735133585858, 79.06705883586447, map, "Kedarnath")

    // Nainital
    this.show_weather(29.393068211823945, 79.4538972007454, map, "Nainital")

    // Leh
    this.show_weather(34.14014057888104, 77.59412994505182, map, "Leh")

    // Srinagar
    this.show_weather(34.091339045412745, 74.80125806401037, map, "Srinagar")

    // Udhampur
    this.show_weather(32.91213793245046, 75.14335451357483, map, "Udhampur")

    // Gilgit
    this.show_weather(35.93895935726271, 74.31009451183377, map, "Gilgit")

    // Gogra
    this.show_weather(35.28414334040196, 79.40292666655068, map, "Gogra")

    // Hanle
    this.show_weather(32.81679105685252, 79.16823402355192, map, "Hanle")

    // Bhopal
    this.show_weather(23.454191599013683, 77.33331111350303, map, "Bhopal")

    // Kutch
    this.show_weather(24.480352461397988, 71.53309000108518, map, "Kutch")

    // Bhubaneswar
    this.show_weather(20.369076070137083, 85.86381997180362, map, "Bhubaneswar")

    // Balangir
    this.show_weather(20.7560702687272, 83.36327094842645, map, "Balangir")

    // Bhilai
    this.show_weather(21.187334985363915, 81.3055492924157, map, "Bhilai")

    // Bijapur
    this.show_weather(19.012368781492118, 81.39294026336783, map, "Bijapur")

    // Ambikapur
    this.show_weather(23.131546637635484, 83.18770289610815, map, "Ambikapur")

    // Jamshedpur
    this.show_weather(22.811859365524754, 86.19670910669683, map, "Jamshedpur")

    // Khajuraho
    this.show_weather(24.830426131810825, 79.92040769239767, map, "Khajuraho")

    // Hazaribagh
    this.show_weather(24.20425160357125, 85.35410724770453, map, "Hazaribagh")

    // Garhwa
    this.show_weather(24.15482680212085, 83.79274225510905, map, "Garhwa")

    // Rourkela
    this.show_weather(22.260268954608954, 84.85230016574218, map, "Rourkela")

    // Patna
    this.show_weather(25.593152686009724, 85.14303866787358, map, "Patna")

    // Katihar
    this.show_weather(25.551957071148745, 87.55616678851774, map, "Katihar")

    // Durgapur
    this.show_weather(23.52006443438905, 87.31115602210544, map, "Durgapur")

    // Deoghar
    this.show_weather(24.486490144042172, 86.69419777252885, map, "Deoghar")

    // Jaisalmer
    this.show_weather(26.916737136963235, 70.90966368220357, map, "Jaisalmer")

    // Sikkim
    this.show_weather(27.448057080326663, 88.47756510539888, map, "Sikkim")

    // Mizoram
    this.show_weather(23.468031247223372, 92.92845343482352, map, "Mizoram")

    // Tripura
    this.show_weather(23.64514809105338, 91.5517103974608, map, "Tripura")

    // Imphal
    this.show_weather(24.801689577135967, 93.94233404308123, map, "Imphal")

    // Meghalaya
    this.show_weather(25.548507387110412, 91.0167959202494, map, "Meghalaya")

    // Nagaland
    this.show_weather(26.06642697550922, 94.69111027876612, map, "Nagaland")

    // Arunachal
    this.show_weather(28.421871761710232, 94.41025091139765, map, "Arunachal")

}


function show_weather (lati, long, pos, place) {

    var hours = new Date().getHours()
    var isday = hours > 6 && hours < 19

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=6be9fac2c278d09c65cdb4ae67421c26`,
        type: "get",
        success: function (response) {
           var weather = `${response.weather[0].main}`;
           var weatherDescription = `${response.weather[0].description}`;

           if (weather === 'Thunderstorm' && (weatherDescription === 'light thunderstorm' || weatherDescription === 'thunderstorm' ||weatherDescription === 'heavy thunderstorm' || weatherDescription === 'ragged thunderstorm' || weatherDescription === 'thunderstorm with light drizzle' || weatherDescription === 'thunderstorm with drizzle' || weatherDescription === 'thunderstorm with heavy drizzle'))
            {
                var iconName = "thunderstorm";
            }
            else if (weather === 'Thunderstorm' && (weatherDescription === 'thunderstorm with light rain' || weatherDescription === 'thunderstorm with rain' ||weatherDescription === 'thunderstorm with heavy rain'))
            {
                var iconName = "thunderstorm-with-rain";
            }
            else if (weather === 'Rain')
            {
                var iconName = "heavy-rain";
            }
            else if (weather === 'Drizzle')
            {
                var iconName = "light-rain";
            }
            else if (weather === 'Snow')
            {
                var iconName = "snow";
            }
            else if (weather === 'Clouds' && (weatherDescription === 'few clouds') && isday)
            {
                var iconName = "partly-cloudy";
            }
            else if (weather === 'Clouds' && (weatherDescription != 'few clouds') && isday)
            {
                var iconName = "cloudy";
            }
            else if (weather === 'Clouds' && !isday)
            {
                var iconName = "cloudy-night";   
            }
            else if (weather === 'Clear' && isday)
            {
                var iconName = "sunny";
            }
            else if (weather === 'Clear' && !isday)
            {
                var iconName = "night";
            }
            else if (weather === 'Haze')
            {
                var iconName = "haze";
            }
            else if (weather === 'Mist' || weather === 'Fog')
            {
                var iconName = "mist";
            }
            else if (weather === 'Dust' ||weather === 'Sand' || weather === 'Ash' || weather === 'Smoke')
            {
                var iconName = "dust";
            }
            else if (weather === 'Squall')
            {
                var iconName = "squall";
            }
            else if (weather === 'Tornado')
            {
                var iconName = "tornado";
            }
            
            $("#images_container").append(
                `
                <img id="weather${place}" class="image-marker" src="./assets/${iconName}.png">
                `
            );

            var weatherIcon = document.querySelector(`#weather${place}`);

            var marker = new mapboxgl.Marker({
            element: weatherIcon
            })
                .setLngLat([long, lati])
                .addTo(pos);

        }  
    });
}