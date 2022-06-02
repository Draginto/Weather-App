const {getGeoLocationCoordinatesFromApi} = require("../src/components/utils/getGeoLocationCoordinatesFromApi");

test('Entering New York should send back latitude and longitude coordinates', () => {
   return getGeoLocationCoordinatesFromApi("New York").then((response) => {
       expect(response).toHaveProperty('lat');
       expect(response).toHaveProperty('lon');
   })
})