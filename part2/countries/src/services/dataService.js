import axios from "axios"

const API_KEY = import.meta.env.VITE_SOME_KEY
const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => (
	axios.get(countriesUrl).then(response => response.data)
)

const getWeather = (countryData) => (
	axios
		.get(
			`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${countryData.capital[0]}`
		)
		.then(response => response.data)
)

export default { getAllCountries, getWeather }