import {Box, TextField, Typography} from '@mui/material';

export default function FormBuscarTags(props){
 

  return (
   
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
        <Typography variant='h6'sx={{display:props.titleForm}} >Meus projetos</Typography>
      <TextField 
        variant='outlined'
        label='Buscar tags'
        sx={{
          width:props.width,
          height:'56px'
          }}/>
      </Box>
    
  )
}
