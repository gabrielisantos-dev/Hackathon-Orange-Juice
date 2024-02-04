import { createTheme,ThemeProvider } from "@mui/material";
import ContainerImagemTelaLogin from "../components/tela-login/ContainerImagemTelaLogin";
import BotaoGoogleLogin from "../components/tela-login/BotaoGoogleLogin"
import FormularioLogin from "../components/tela-login/FormularioLogin";
import TituloTelaLogin from "../components/tela-login/TituloTelaLogin";
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import { CircularProgress } from '@mui/material'


const theme = createTheme({
  palette:{
    primary:{
      main: '#111133',
      light:'#444466',
      dark:'#222244',
      contrastText: '#EDEFF2'      
    },
    secondary:{
      main: '#FF5522',
      secondaryMain:'#FF8833',
      light:'#FFAA66',
      secondaryLight:'#FFCC99',
      dark:'#CC4400',
      secondaryDark:'#993300',
      darkest:'#662200',
      contrastText: '#FFEECC',
      secondContrastText: '#FFCC99'      
    },
    neutral:{
      main:'#818388',
      secondaryMain:'#A1A3AA',
      light:'#C2C4CC',
      secondaryLight:'#E6E9F2',
      dark:'#515255',
      secondaryDark:'#303133',
      darkest:'#0B0C0D'
    }
  }
});


export default function TelaLogin(){
  
  const [logado, setLogado] = useState(false);
  
  const responsivo1 = useMediaQuery(theme.breakpoints.up('lg')); 
  const responsivo2 = useMediaQuery(theme.breakpoints.up('xl'));
  
  const navigate = useNavigate()
   

  

useEffect(()=>{
  if(logado){
    navigate('/')
  }

},[logado])
  

  return (
    <ThemeProvider theme={theme}>      
     

      <Box sx={{display: 'flex', gap:!responsivo2 ? '103px' : '403px'}}>


      {responsivo1 ?  
        <Box>
          <ContainerImagemTelaLogin width='525px' height='832px'/>     
        </Box> : null}
        <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'10px',
              marginTop:responsivo1 ? '210px' : '109px',
              marginLeft: '32px',              
              alignItems:'center',
                          
            }}>
            <TituloTelaLogin variant={responsivo1 ? 'h3' : 'h5'} sx={{marginTop:responsivo1 ? '210px' : '109px'}}/>
            <BotaoGoogleLogin sx={{marginTop:responsivo1 ? '282px' : '165px'}}/>
            <FormularioLogin 
              sx={{marginTop:responsivo1 ? '360px' : '243px'}}
              titulo= {responsivo1 ? 'h5' : 'subtitle1'}
              formWidth={responsivo1 ? '517px' : '312px'}
              buttonWidth={responsivo1 ? '517px' : "312px"}
              buttonHeight={responsivo1 ? '42px' : '42px'}
              paddingButton={responsivo1 ? '8px 22px 8px 22px' : '8px 22px 8px 22px'}
              boxWidth={responsivo1 ? '517px' : '312px'}
              topTotalbox={responsivo1 ?'360px' : '243px'}
              widthTitle={responsivo1 ? '493px' : '288px'}
              heightTitle={responsivo1 ? '24px' : '16px'}
              formHeight={responsivo1 ? '271px' : '271px'}
              setLogado={setLogado}
             
              />
               
          </Box>          
      </Box>     
      
         
      
    </ThemeProvider>
  )
}