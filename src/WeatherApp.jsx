import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatheInfo, setWeatheInfo] = useState({
        city: "Sylhet",
        temp: 23.32,
        tempMin: 23.32,
        tempMax: 23.32,
        humidity: 48,
        feelsLike: 22.96,
        weather: "clear sky",
    });

    let updateInfo = (result) => {
        setWeatheInfo(result);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatheInfo} />
        </div>
    )
}