import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}) {
 const INIT_URL="https://i.pinimg.com/originals/07/9d/1d/079d1d1d8c4139812ab48bd799fa77e5.jpg";
 
return(
    <div className='card'>
       
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
           <p>Temperture={info.temp}&deg;C</p>
           <p>humidity={info.humidity}</p>
           <p>Pressure={info.pressure}</p>
           <p>Min temp={info.temp_min}&deg;C</p>
           <p>Max temp={info.temp_max}&deg;C</p>
           <p>The Weather Can Describe as{info.weather} feelsLike {info.feelsLike}&deg;C</p>
            
             
        </Typography>
      </CardContent>
       
    </Card>
    </div>

)
}