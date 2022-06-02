export const getCurrentLocationCoordinates = () => {
  const geoPosition = [];
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      geoPosition.push(position.coords.latitude);
      geoPosition.push(position.coords.longitude);
    });
  } else {
    console.log('Geolocation is not available');
  }
  return geoPosition;
};
