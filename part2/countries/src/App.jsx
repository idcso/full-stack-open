import { useState } from "react"
import { useEffect } from "react"
import Form from "./components/Form"
import Countries from "./components/Countries"
import Data from "./components/Data"
import dataService from "./services/dataService"

const App = () => {
  const [country, setCountry] = useState('')
  const [allCountries, setAllCountries] = useState(null)
  const [message, setMessage] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [weatherData, setWeatherData] = useState('')

  const handleCountryChange = (event) => {
    const newCountry = event.target.value
    setCountry(newCountry)
    setCountryData(null)

    if (!newCountry) {
      setMessage(newCountry)
      return
    }

    const filteredCountries = allCountries.filter(countryObj => (
      countryObj.name.common.toLowerCase().includes(newCountry)
    ))

    if (filteredCountries.length > 10) {
      setMessage('Too many matches, specify another filter')
    } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
      setMessage(filteredCountries)
    } else if (filteredCountries.length === 0) {
      setMessage('no such country found')
    } else {
      setMessage('')
      setCountryData(filteredCountries[0])
    }
  }

  const showSelectedCountry = (country) => {
    setCountryData(country)
  }

  useEffect(() => {
    dataService.getAllCountries().then(countries => setAllCountries(countries))
  }, [])

  useEffect(() => {
    if (countryData) {
      dataService
        .getWeather(countryData)
        .then(weather => setWeatherData(weather))
    }
  }, [countryData])

  if (!allCountries) return null

  return (
    <>
      <Form country={country} handleCountryChange={handleCountryChange} />
      <Countries
        countries={message} 
        showSelectedCountry={showSelectedCountry}
      />
      <Data countryData={countryData} weatherData={weatherData} />
    </>
  )
}

export default App