import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    let REACT_APP_API_URL="https://api.weatherapi.com/v1/current.json"
    let REACT_APP_API_KEY="f5b360ab883f464a9a891840241807"
    async function generateWeather() {
        try {
            const response = await fetch(`${REACT_APP_API_URL}?q=${city}&key=${REACT_APP_API_KEY}`);
            if (!response) {
                throw new Error('Network response was not ok');
            }
            const jsonResponse = await response.json();
            const result = {
                city: jsonResponse.location.name,
                state: jsonResponse.location.region,
                country: jsonResponse.location.country,
                temp: jsonResponse.current.temp_c,
                feelsLike: jsonResponse.current.feelslike_c,
                heatIndex: jsonResponse.current.heatindex_c,
                condition: jsonResponse.current.condition.text,
                conditionImg: jsonResponse.current.condition.icon,
                windSpeed: jsonResponse.current.wind_kph,
                windDirection: jsonResponse.current.wind_dir,
                windDegree: jsonResponse.current.wind_degree,
                humidity: jsonResponse.current.humidity,
                visibility: jsonResponse.current.vis_km,
                uvIndex: jsonResponse.current.uv
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }
    
    function inputChange(event) {
        setCity(event.target.value);
    }

    async function formSubmit(event) {
        event.preventDefault();
        console.log(city);
        setCity("");
        const info = await generateWeather();
        if (info) {
            updateInfo(info);
        }
    }

    return (
        <div className='searchBox'>
            <form onSubmit={formSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={inputChange}
                    size='small'
                    required
                /><br /><br />
                <Button variant="contained" type='submit' size='small'>
                    Search
                </Button>
            </form>
        </div>
    );
}
