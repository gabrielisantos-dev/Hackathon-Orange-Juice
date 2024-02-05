import { ThemeProvider } from "@mui/material";
import ContainerImagemTelaLogin from "../components/tela-login/ContainerImagemTelaLogin";
import FormularioLogin from "../components/tela-login/FormularioLogin";
import TituloTelaLogin from "../components/tela-login/TituloTelaLogin";
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import { CircularProgress } from '@mui/material'
import {theme} from '../utils/Theme'




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
            {/* <BotaoGoogleLogin sx={{marginTop:responsivo1 ? '282px' : '165px'}}/> */}
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