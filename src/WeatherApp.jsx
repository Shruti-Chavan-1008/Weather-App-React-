import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';


export default function WeatherApp(){
  const [WeatherInfo,setWeatherInfo]=useState({
    city: "pune",
    feelsLike: 26.67,
    humidity: 29,
    pressure: 1014,
    temp: 27.45,
    temp_max: 27.45,
    temp_min: 27.45,
    weather:"clear sky"
 });

 let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
 }
    return(
        <div>
            <h2>This is Weather App By Shruti</h2>
             <SearchBox updateInfo={updateInfo} />
             <InfoBox info={WeatherInfo}/>
        </div>
        
    );
}