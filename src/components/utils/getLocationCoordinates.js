import axios from 'axios';

export const getLocationGeoCoordinates = (locationData, formData) => {
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${
        locationData || 'New+York'
      }&limit=5&appid=e495de1eca56adfc01f9485fd2316a63`
    )
    .then((response) => response);
};
