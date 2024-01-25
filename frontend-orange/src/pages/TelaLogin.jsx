import ContainerImagemTelaLogin from "../components/tela-login/ContainerImagemTelaLogin";
import BotaoGoogleLogin from "../components/tela-login/BotaoGoogleLogin";
import FormularioLogin from "../components/tela-login/FormularioLogin";
import TituloTelaLogin from "../components/tela-login/TituloTelaLogin";
import { Box } from "@mui/material";
// import { theme } from "../utils/Theme"
import { createTheme,ThemeProvider } from "@mui/material/styles";
// import { Theme } from "@mui/material";
import {useMediaQuery} from "@mui/material";

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
  
  const responsivo1 = useMediaQuery(theme.breakpoints.up('lg')); 
  const responsivo2 = useMediaQuery(theme.breakpoints.up('xl')); 


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
              // gap:'75px',
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
              />
               {/* <FormularioLogin 
              sx={{marginTop:'360px'}}
              titulo='h5'
              formWidth='517px'
              buttonWidth='517px'
              buttonHeight='42px'
              paddingButton='8px 22px 8px 22px'
              boxWidth='517px'
              topTotalbox='360px'
              widthTitle='493px'
              heightTitle='24px'
              formHeight='271px'
              /> */}
          </Box>
          {/* Form mobile */}
          {/* {!responsivo1 ? <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'10px',
              marginTop:'109px',
              // gap:'75px',
              alignItems:'center',              
            }}>
            <TituloTelaLogin variant='h5' sx={{marginTop:'109px'}}/>
            <BotaoGoogleLogin sx={{marginTop:'165px'}} width='181px' height='46px'/>
            <FormularioLogin 
              sx={{marginTop:'243px'}}
              titulo='subtitle1'
              formWidth='312px'
              buttonWidth='312px'
              buttonHeight='42px'
              paddingButton='8px 22px 8px 22px'
              boxWidth='312px'
              topTotalbox='243px'
              widthTitle='288px'
              heightTitle='16px'
              formHeight='271px'
              />
          </Box> : null} */}
          
      </Box>
    </ThemeProvider>
  )
}