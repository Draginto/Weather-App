import { fetchWeather } from "../src/components/utils/fetchWeather";

const getCurrentWeather = () => {
    return fetchWeather(40.7127281, -74.0060152).then((response) => {
        return response.list[0].main.temp;
    });
}

test('Given New York latitude and longitude return back todays temperature', () => {
    return getCurrentWeather().then((temperature) => {
        expect(temperature).not.toBeUndefined();
    })
})