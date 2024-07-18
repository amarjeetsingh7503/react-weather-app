import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState( {
        city: "Land",
        temp: 31.3,
        feelsLike: 32.2,
        heatIndex: 43.2,
        condition: "Moderate or heavy rain with thunder",
        conditionImg: "//cdn.weatherapi.com/weather/64x64/day/389.png",
        windSpeed: 9,
        windDirection: "NE",
        wnidDegree: 20,
        humidity: 84,
        visibility: 2.5,
        uvIndex: 9
    })

    let updateInfo = (info) => {
        setWeatherInfo(info);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <WeatherInfo info={weatherInfo}/>
        </div>
    )
}