import axios from 'axios';
//TODO: Needs to be updated for extra fields like zip code, state and city.
export const getGeoLocationCoordinatesFromApi = (locationArea) => {
  // Recieves coordinate data from API and returns geocoordinate data as an object in a promise.
  const response = axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${
        locationArea || 'New+York'
      }&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((response) => {
      return response.data[0];
    }).then((coords) => {
      return {lat: coords["lat"], lon: coords["lon"]};
    }).catch(err => {throw new Error(err)});
    return response;
};