export const convertTemperature = (temperature, mode = 'fahrenheit') => {
  if (temperature && mode === 'fahrenheit') {
    let celcius = (+temperature - 32) * 0.5559;
    return +celcius.toFixed(2);
  }

  if (temperature && mode === 'celcius') {
    let fahrenheit = +temperature * 1.8 + 32;
    return +fahrenheit.toFixed(2);
  }
};
