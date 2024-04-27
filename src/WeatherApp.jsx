import Search from "./Search.jsx"
import Title from "./Title.jsx"
import Info from './Info.jsx'
import Error from './Error.jsx'
import { useState } from 'react'

function WeatherApp() {
  let [weather,setWeather] = useState({city: "Angry Land",
    temp:25,
    temp_max:27,
    temp_min:24,
    humidity:45,
    feels_like:26,
    type:"Haze"
  });
  let [error,setError] = useState("");

  return (
    <>
      <Title/>
      <Search setWeather={setWeather} setError={setError}/>
      <Error err={error}/>
      <Info weather={weather}/>
    </>
  )
}
export default WeatherApp;
