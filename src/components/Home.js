import { Box, Grid, CardMedia, Typography, Input } from '@mui/material'
import { useState } from 'react'
// import logo from '../assets/images/02d.svg'



const Home = ( {displayHome} ) =>{

    const logo = "02d" ;

    return(
        <Box flexDirection="column" display={displayHome} sx={{width:"1000px", height: "480px", backgroundColor:"#ffffff33"}} borderRadius="15px" border="1px solid #9999" boxShadow="2px 4px #8888"  >
        <Grid container marginTop="40px">
            <Grid item xs={4} display="flex" justifyContent="flex-end">
                  <CardMedia
                  component="img"
                  sx={{width:"240px", height:"240px"}}
                  image= {require(`../assets/images/${logo}.svg`)}
                  alt="weather"
                  />
            </Grid>
            <Grid item xs={8}>
                <Typography lineHeight="240px" variant='h2' color="#365a7a"><b>Weather forecast</b></Typography>
            </Grid>
        </Grid>
       
    </Box>
    )
}

export default Home