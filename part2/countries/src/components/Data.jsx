const Weather = ({ countryData, weatherData }) => {
	if (!weatherData) return null

	return (
		<div>
			<h2>Weather in {countryData.capital[0]}</h2>
			<p>temperature {weatherData.current.temp_c} Celsius</p>
			<img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
			<p>wind {weatherData.current.wind_kph} kph </p>
		</div>
	)
}

const Data = ({ countryData, weatherData }) => {
	if (!countryData) return null

	return (
		<div>
			<h1>{countryData.name.common}</h1>
			<p>capital {countryData.capital[0]} <br /> area {countryData.area} </p>
			<h2>languages:</h2>
			<ul>
				{Object.values(countryData.languages).map(language => <li key={language}>{language}</li> )}
			</ul>
			<img src={countryData.flags.png} alt={countryData.flags.alt} />

			<Weather countryData={countryData} weatherData={weatherData} />
		</div>
	)
}

export default Data