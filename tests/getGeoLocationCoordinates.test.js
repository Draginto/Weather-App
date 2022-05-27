const {getGeoLocationCoordinates} = require("../src/components/utils/getGeoLocationCoordinates");

test('Entering New York should send back latitude and longitude coordinates', () => {
   return getGeoLocationCoordinates("New York").then((response) => {
       expect(response).toHaveProperty('lat');
       expect(response).toHaveProperty('lon');
   })
})