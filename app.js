const pElement = document.getElementById('location-details');

const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 10000
}

const success = pos => {
    const coordinates = pos.coords;
    //console.log(coordinates);
    pElement.textContent = `Latitude ${Number(coordinates.latitude.toFixed(2))} Longitude ${Number(coordinates.longitude.toFixed(2))}`;
}

const error = err => {
    console.log(err);
}


navigator.geolocation.getCurrentPosition(success, error, options);
