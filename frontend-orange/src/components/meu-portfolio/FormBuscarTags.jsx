import {Box, TextField, Typography, ThemeProvider} from '@mui/material';
import {theme} from '../../utils/Theme';
import {useForm} from 'react-hook-form';


export default function FormBuscarTags(){

  return (
    <ThemeProvider theme={theme}>
      <Box 
        color='neutral.darkest'
        sx={{
          display:'flex',
          flexDirection:'column',
          opacity:'60%',
          fontWeight:'500',
          lineHeight:'20px', 
          gap:'7px'        
          }}          
          >
        <Typography variant='h6' >Meus projetos</Typography>
      <TextField variant='outlined' label='Buscar tags' sx={{width:'513px', height:'56px'}}/>
      </Box>
    </ThemeProvider>
  )
}
