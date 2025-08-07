const cities = [
    { latitude: 31.23, longitude: 121.47, name: "Shanghai", introduction:"Ami Hashida, ",
        images:[]
    },
    { latitude: 39.90, longitude: 116.41, name: "Beijing", introduction:"Karn (Tanchavalit Ekkanat)",
        images:[]
    },
        { latitude: 42.28, longitude: -87.74, name: "Ann Arbor", introduction:"Anlin Ma",
        images:[]
    },
];



var map = L.map('map').setView([34.32, 100], 4.);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

cities.map((city, index) => {
    const marker = L.marker([city.latitude, city.longitude]).addTo(map);
    marker.bindPopup(`<b>${city.name}</b>`);

    marker.on('click', (e) => {
        document.querySelector('#gallery').innerHTML = '<p>Who are here:</p>';
        document.querySelector('#gallery').innerHTML += `<p>${city.introduction}</p>`;
        city.images.map((image, index) => {
            document.querySelector('#gallery').innerHTML += `<img src=${image.url} alt=${image.alt} >`;
        });
    });
})


// var circle = L.circle([42.280855, -83.720949], {
//     color: 'yellow',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [42.278495, -83.740625],
//     [42.274891, -83.740604],
//     [42.275081, -83.73584]
// ]).addTo(map);

// marker.bindPopup("<b>North Quad</b><br>Taking SI579 here").openPopup();
// circle.bindPopup("I am the ARB.");
// polygon.bindPopup("I am the diag.");

// var popup = L.popup()
//     .setLatLng([42.281844, -83.737428])
//     .setContent("This is where I am")
//     .openOn(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);