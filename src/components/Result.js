
import { Box, Grid, CardMedia, Typography, Input } from '@mui/material';
import { useState } from 'react';

const Result = ({ displayResult, dataWeather }) =>{

    const getNameDay = (param) =>{
        if( (new Date().getDay() + param) < 7){
            return new Date().getDay() + param
        }else{
            return new Date().getDay() + param - 7;
        }
    }

    const day1 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][getNameDay(1)];
    const day2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][getNameDay(2)];
    const day3 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][getNameDay(3)];
    const day4 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][getNameDay(4)];


    return(
        <Box flexDirection="column" display={displayResult} sx={{width:"1000px", height: "480px", backgroundColor:"#ffffff33"}} borderRadius="15px" border="1px solid #9999"  boxShadow="2px 4px #8888" >
            {dataWeather == null ?
            <></>
            :
            <>
            <Grid container marginTop="80px" marginBottom="75px">
                <Grid item xs={4} display="flex" justifyContent="flex-end">
                    <CardMedia
                    component="img"
                    sx={{width:"240px", height:"240px"}}
                    image= {require(`../assets/images/${dataWeather.list[0].weather[0].icon}.svg`) }
                    alt="weather"
                    />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={7} lineHeight="240px">
                    <Typography fontSize="25px" color="#000">Today</Typography>
                    <Typography marginY="15px" variant='h2' color="#000"><b>{dataWeather.city.name}</b></Typography>
                    <Typography fontSize="25px" color="#365a7a">{(dataWeather.list[0].main.temp - 273).toFixed(2)} &deg;C</Typography>
                    <Typography fontSize="25px" color="#365a7a">{dataWeather.list[0].weather[0].description}</Typography>
                </Grid>
            </Grid>
                    <Grid container justifyContent='space-around'>
                             <Grid item display='flex' key={0} >
                                <Box padding="25px" sx={{width:"135px", height:"135px", backgroundColor:"#ffffff33"}} boxShadow="2px 4px #8888" border="1px solid #9999" borderRadius="60px">
                                    <Typography align="center" fontSize="20px"><b>{day1}</b></Typography>
                                    <CardMedia
                                        component="img"
                                        sx={{width:"85px", height:"85px"}}
                                        image= {require(`../assets/images/${dataWeather.list[7].weather[0].icon}.svg`) }
                                        alt="weather"
                                        />
                                    <Typography align="center" fontSize="20px">{(dataWeather.list[7].main.temp - 273).toFixed(2)} &deg;C</Typography>
                                </Box>
                            </Grid>
                            <Grid item display='flex'>
                                <Box padding="25px"  sx={{width:"135px", height:"135px", backgroundColor:"#ffffff33"}} boxShadow="2px 4px #8888" border="1px solid #9999" borderRadius="60px">
                                <Typography align="center" fontSize="20px"><b>{day2}</b></Typography>
                                <CardMedia
                                        component="img"
                                        sx={{width:"85px", height:"85px"}}
                                        image= {require(`../assets/images/${dataWeather.list[15].weather[0].icon}.svg`) }
                                        alt="weather"
                                        />
                                    <Typography align="center" fontSize="20px">{(dataWeather.list[15].main.temp - 273).toFixed(2)} &deg;C</Typography>
                                </Box>
                            </Grid>
                            <Grid item display='flex'>
                                <Box padding="25px"  sx={{width:"135px", height:"135px", backgroundColor:"#ffffff33"}} boxShadow="2px 4px #8888" border="1px solid #9999" borderRadius="60px">
                                <Typography align="center" fontSize="20px"><b>{day3}</b></Typography>
                                <CardMedia
                                        component="img"
                                        sx={{width:"85px", height:"85px"}}
                                        image= {require(`../assets/images/${dataWeather.list[23].weather[0].icon}.svg`) }
                                        alt="weather"
                                        />
                                   <Typography align="center" fontSize="20px">{(dataWeather.list[23].main.temp - 273).toFixed(2)} &deg;C</Typography>
                                </Box>
                            </Grid>
                            <Grid item display='flex'>
                                <Box padding="25px"  sx={{width:"135px", height:"135px", backgroundColor:"#ffffff33"}} boxShadow="2px 4px #8888" border="1px solid #9999" borderRadius="60px">
                                <Typography align="center" fontSize="20px"><b>{day4}</b></Typography>
                                <CardMedia
                                        component="img"
                                        sx={{width:"85px", height:"85px"}}
                                        image= {require(`../assets/images/${dataWeather.list[31].weather[0].icon}.svg`) }
                                        alt="weather"
                                        />
                                    <Typography align="center" fontSize="20px">{(dataWeather.list[31].main.temp - 273).toFixed(2)} &deg;C</Typography>
                                </Box>
                            </Grid>
                    </Grid>
            </>
        }

        </Box>
    )
}

export default Result;