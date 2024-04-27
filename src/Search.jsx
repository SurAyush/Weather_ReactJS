import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Search.css'

function Search({setWeather,setError})
{
    let [city,setCity] = React.useState("");

    function handleChange(evt)
    {
        setCity(evt.target.value);
    }

    async function handleSubmit(evt)
    {
        evt.preventDefault();
        console.log(city);
        let data = await callapi();
        setWeather({...data});
    }

    async function callapi()
    {
        //key: your api key
        let geo_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;        //geocoding
        let w_data;
        try{
            let res = await fetch(geo_URL);
            let jsonresponse = await res.json();        
            let lat = jsonresponse[0].lat;
            let lon = jsonresponse[0].lon;
            let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
            let w_res = await fetch(URL);
            w_data = await w_res.json();
            setError("");
        }
        catch{
            console.log(`Sorry cannot fetch information about ${city}`);
            setError("Location not found");
        }
        const data = {city: city,
            temp:w_data.main.temp,
            temp_max:w_data.main.temp_max,
            temp_min:w_data.main.temp_min,
            humidity:w_data.main.humidity,
            feels_like:w_data.main.feels_like,
            type: w_data.weather[0].main
        };
        return data;
    }

    return(
        <div className="Search">
        <h2>Search your city</h2>
        <form onSubmit={handleSubmit}>
            <div className="cont">
                <div className="box">
                    <TextField value = {city} onChange={handleChange} className='inp' id="outlined-basic" label="City Name" variant="outlined" required/>
                </div>
                <div className="box">
                    <Button variant="contained" type="submit">Search </Button>
                </div>
            </div>
        </form>
        </div>
    )
}

export default Search;