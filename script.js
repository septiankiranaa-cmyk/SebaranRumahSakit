// MEMBUAT MAP
var map = L.map('map').setView([-6.2416, 106.9924], 11);

// BASEMAP
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap Contributors'
    }
).addTo(map);

// MEMANGGIL GEOJSON
fetch('rs_bekasi.geojson')

.then(response => response.json())

.then(data => {

    L.geoJSON(data, {

        onEachFeature: function(feature, layer){

            layer.bindPopup(

                "<b>Rumah Sakit :</b> " +
                feature.properties["Rumah Sakit"] +

                "<br><br>" +

                "<b>Tipe :</b> " +
                feature.properties["Tipe"] +

                "<br><br>" +

                "<b>Alamat :</b> " +
                feature.properties["Alamat"] +

                "<br><br>" +

                "<b>Maps :</b><br>" +

                "<a href='" +
                feature.properties["Maps"] +
                "' target='_blank'>Buka Google Maps</a>"

            );

        }

    }).addTo(map);

});
