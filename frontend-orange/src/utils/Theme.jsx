import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
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