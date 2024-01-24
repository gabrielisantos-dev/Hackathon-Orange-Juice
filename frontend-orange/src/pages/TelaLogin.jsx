import ContainerImagemTelaLogin from "../components/tela-login/ContainerImagemTelaLogin";
import BotaoGoogleLogin from "../components/tela-login/BotaoGoogleLogin";
import FormularioLogin from "../components/tela-login/FormularioLogin";
import TituloTelaLogin from "../components/tela-login/TituloTelaLogin";
import { Box } from "@mui/material";
// import { theme } from "../utils/Theme"
import { createTheme,ThemeProvider } from "@mui/material/styles";
// import { Theme } from "@mui/material";


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
})

export default function TelaLogin(){

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex', gap:'103px'}}>
          <Box>
            <ContainerImagemTelaLogin width='525px' height='832px'/>    
          </Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'10px',
              marginTop:'210px',
              // gap:'75px',
              alignItems:'center',
              
            }}>
            <TituloTelaLogin variant='h3' sx={{marginTop:'210px'}}/>
            <BotaoGoogleLogin sx={{marginTop:'282px'}}/>
            <FormularioLogin 
              sx={{marginTop:'360px'}}
              />
          </Box>
      </Box>
    </ThemeProvider>
  )
}