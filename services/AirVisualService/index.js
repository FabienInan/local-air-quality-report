
const baseUrl = 'https://api.airvisual.com/v2/';

const apiKey = '05174119-c8c9-4288-b338-e9a3e909014d';

export const getNearestCity = (latitude, longitude) => {
    const url = baseUrl + 'nearest_city?lat=' + latitude + '&lon=' + longitude + '&key=' + apiKey; 
    return fetch(url)
        .then(response => response.json())
        .then(response => response.data);
}