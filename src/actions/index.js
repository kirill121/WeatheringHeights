import axios from 'axios';
const API_KEY = 'b5bc9bace264032247efe557b819da68';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},za`
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}