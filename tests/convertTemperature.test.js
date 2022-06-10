import { convertTemperature } from '../src/components/utils/convertTemperature';

it('Returns 42.8 degrees fahrenheit when given 6 celcius', () => {
  expect(convertTemperature('6', 'celcius')).toBe(42.8);
});

it('Returns 6 degrees celcius when given 42.8 fahrenheit', () => {
  expect(convertTemperature('42.8', 'fahrenheit')).toBe(6);
});
