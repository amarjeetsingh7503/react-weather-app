import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./WeatherInfo.css";

export default function WeatherInfo({info}) {
    return(
        <div className='weatherInfoBox'>
            <h2>Weather Information</h2>
            <div className='weatherCard'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" component="div">
                            {info.condition} <br />
                        </Typography>
                        <Typography variant="p" color="text.secondary" className='weatherDetails'>
                            <img src={info.conditionImg} alt="" /> <br />
                            Temperature: {info.temp}&deg;C <br />
                            Feels Like: {info.feelsLike}&deg;C <br />
                            Visibility: {info.visibility} km <br />
                            Humidity: {info.humidity}% <br />
                            Heat Index: {info.heatIndex}&deg;C <br />
                            UV Index: {info.uvIndex} out of 10 <br />
                            Wind Speed: {info.windSpeed} km/h, {info.windDegree}&deg;{info.windDirection}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
