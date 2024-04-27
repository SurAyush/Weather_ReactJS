import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Info.css'

function Info({weather})
{   
    const images = ["https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1607857673310-bcb3954b8d41?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

    //sunny,rain,cold,clear
    let img;
    if(weather.temp <= 0)
        img = images[2];
    else if (weather.temp>25)
        img=images[0];
    else
        if(weather.humidity>80)
            img=images[1];
        else
            img=images[3]; 
        
    return(
        <div className='Info'>
            <Card sx={{ maxWidth: 345 }} className='Card'>
            <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={img}
            alt="Weather image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <i>{weather.city}</i>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <p>Weather Info: <b>{weather.type}</b></p>
                <p>Temperature: <b>{weather.temp}&deg; C</b></p>
                <p>Max Temperature: {weather.temp_max}&deg; C</p>
                <p>Min Temperature: {weather.temp_min}&deg; C</p>
                <p>Humidity: {weather.humidity}</p>
                <p>It feels like: <b>{weather.feels_like}&deg; C</b></p>
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default Info;