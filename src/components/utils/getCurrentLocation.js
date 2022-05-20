export const getCurrentLocation = () => {
  const geoPosition = {};
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      geoPosition['lat'] = position.coords.latitude;
      geoPosition['long'] = position.coords.longitude;
    });
  } else {
    console.log('Geolocation is not available');
  }
  return geoPosition;
};
