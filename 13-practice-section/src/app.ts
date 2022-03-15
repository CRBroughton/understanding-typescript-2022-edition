import axios from 'axios'

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = '';

type GoogleGeocodingResponseStatus = 'OK' | 'ZERO_RESULTS';

type GoogleGeocodingResponse = {
    results: {
        geometry: {
            location: {
                lat: number;
                lng: number;
            }
        }
    }[]
    status: GoogleGeocodingResponseStatus;
}

function searchAddressHandler(event: Event) {
    event.preventDefault();

    const enteredAddress = addressInput.value;

    // send to Google API

    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
        .then(response => {

            if (response.data.status !== 'OK') {
                throw new Error('Could not fetch location!');
            }

            const coordinates = response.data.results[0].geometry.location;
            const mapDiv = document.getElementById('map') as HTMLDivElement;
            const map = new google.maps.Map(mapDiv, {
                center: coordinates,
                zoom: 12
            });

            new google.maps.Marker({
                position: coordinates,
                map: map,
            });
        })
        .catch(error => {
        alert(error.message);
        console.log(error);
    })
};

form.addEventListener('submit', searchAddressHandler);