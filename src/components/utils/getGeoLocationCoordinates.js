import axios from 'axios';
//TODO: Needs to be updated for extra fields like zip code, state and city.
export const getGeoLocationCoordinates = (locationArea) => {
  // Recieves coordinate data from API and returns location data it as an object.
  let locations = {};
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${
        locationArea || 'New+York'
      }&limit=1&appid=`
    )
    .then((response) => {
      response.data.forEach((location) => {
        locations["lat"] = location["lat"];
        locations["lon"] = location["lon"];
      });
    });

  return locations;
};
