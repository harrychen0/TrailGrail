mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: trail.geometry.coordinates, // starting position [lng, lat]
    zoom: 13, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(trail.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${trail.title}</h3><p>${trail.location}</p>`
            )
    )
    .addTo(map)
