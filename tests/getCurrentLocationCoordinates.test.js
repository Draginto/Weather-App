/**
 * @jest-environment jsdom
 */

import { getCurrentLocationCoordinates } from '../src/components/utils/getCurrentLocationCoordinates';

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 40.758591,
          longitude: -73.925231,
        },
      })
    )
  ),
};
global.navigator.geolocation = mockGeolocation;
test('Get the current location from browser', () => {
  expect(getCurrentLocationCoordinates()).toStrictEqual([
    40.758591, -73.925231,
  ]);
});
