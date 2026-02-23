import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




export default function SearchBox({updateInfo})  {
let [city ,setCity]=useState("");
let [error,setError]=useState("");
const API_URL=" https://api.openweathermap.org/data/2.5/weather";
const API_KEY="ff03d7ad0dff1d95ddf12210068934fc";
 
let getWeatherInfo=async( )=>{
  try{
   let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse =await response.json();
 
  let result={
    city:city,
    temp: jsonResponse.main.temp,
    temp_max: jsonResponse.main.temp_max,
    temp_min: jsonResponse.main.temp_min,
    pressure: jsonResponse.main.pressure,
    humidity: jsonResponse.main.humidity,
    feelsLike: jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description
  }
  console.log(result);
  return result;
  } catch(err) {
    setError("No such place is Present in our api");
    
  }
  
};

let handleChange=(evt)=>{
    setCity(evt.target.value);
};

let handleSubmit=async (evt)=>{
  evt.preventDefault();
  console.log(city);
  setCity("");
 let newinfo= await getWeatherInfo();
 updateInfo(newinfo);
};


    return(
        <div>
          <h3>Search for the Weather</h3>
          <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined"   required  value={city} onChange={handleChange}/>
                 <br></br><br></br>
                <Button variant="contained" type="submit"  >
                      SEARCH
                </Button>
          </form>
        </div>
    );
}
