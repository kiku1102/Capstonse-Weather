import background from '../src/assets/images/background.jpg'

import { Box , Grid, Input} from '@mui/material'
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Result from './components/Result';


function App() {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'       
};
const [valueInput, setValueInput] = useState("");

const [data, setData] = useState("");
const [displayResult, setDisplayResult] = useState("none");
const [displayHome, setDisplayHome] = useState("flex");
const [dataWeather, setDataWeather] = useState(null);
const [placeholder, setPlaceholder] = useState("Enter a city...");

const [mbInput, setMbInput] = useState("-380px");
const [mbBox, setMbBox] = useState("-330px");
const [mtInput, setMtInput] = useState("");

const handleProcess = () =>{
  setDisplayResult("flex");
  setDisplayHome("none");
  setMbInput("10px");
  setMtInput("-100px");
  setMbBox("");
  setPlaceholder("Enter a city...");
}

const onKeyDownGetData = (event) => {
  if(event.key === "Enter"){
      event.preventDefault();
      // console.log(event.target.value);
      setData(event.target.value);
      setValueInput("");
    }
  }
  
  const getData = async (paramUrl, paramObject = {}) =>{
    const response = await fetch(paramUrl);
    if(response.status === 200){
      const data = await response.json();
      handleProcess();
      return data;
    }
    if(response.status === 404){
      setPlaceholder("City was not found, please try again...")
    }
  }

  useEffect(() =>{
    getData(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=7884bb5c3107ab86c3b3457811a68486`)
    .then((data) =>{  
        console.log(data);
        setDataWeather(data);    
    })
    .catch((error) =>{
    console.log(error)
  })
},[data])
 
return(
<Box flexDirection="column" display="flex" style={styles} justifyContent="center">
      <Grid display="block" container sx={{padding:"0 300px 0 300px"}} marginBottom={mbInput} marginTop={mtInput}>
            <Input    
                value={valueInput} 
                onChange={(event) => setValueInput(event.target.value)} 
                onKeyDown={onKeyDownGetData} 
                placeholder={placeholder} 
                fullWidth sx={{border:"2px solid #9999", backgroundColor:"white", borderRadius:"20px", padding:"10px 30px"}} 
                disableUnderline    
                
                />
        </Grid>
    <Box display="flex" justifyContent="center" marginBottom={mbBox}>
       <Home
    
        displayHome={displayHome}
        placeholder={placeholder}
       />
      <Result
        displayResult={displayResult}
        dataWeather={dataWeather}
      />
    </Box>
</Box>
)
}

export default App;
