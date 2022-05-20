import axios from 'axios';
//TODO: Needs to be updated for extra fields like zip code, state and city.
export const getGeoLocationCoordinates = (locationData) => {
  let locations = [];
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${
        locationData || 'New+York'
      }&limit=1&appid=e495de1eca56adfc01f9485fd2316a63`
    )
    .then((response) => {
      response.data.forEach((elem) => locations.push(elem));
    });

  return locations;
};
