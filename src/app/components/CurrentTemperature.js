import { fetchWeatherApi } from "openmeteo";

const CurrentTemperature = async ({ latitude, longitude }) => {
    const params = {
        latitude: latitude || 26.8393,
        longitude: longitude || 80.9231,
        current: "temperature_2m",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const current = response.current();
        const temperature = current?.variables(0)?.value();
        const roundedTemp = temperature !== undefined ? Math.round(temperature) : undefined;
        return roundedTemp !== undefined ? `${roundedTemp}°C` : "";
    } catch (e) {
        return '';
    }
};

export default CurrentTemperature;
