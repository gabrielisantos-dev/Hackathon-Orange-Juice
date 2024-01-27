import { Box, Typography, ThemeProvider } from "@mui/material";
import collections from '../../assets/collections/collections.svg';

export default function ListaProjetos(props){

  return(
  
    <Box  
      sx={{
        width:props.width,
        height:'258px',
        display:'flex',
        borderRadius:'5px',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'neutral.secondaryLight',
        }}
        >
      <Box 
        sx={{
          width:'270px',
          height:'122px',
          display:'flex',
          flexDirection:'column'
          }}
          >
        <Box 
          sx={{
            width:'46px',
            height:'46px',
            margin:'auto'
            }}
            >
          <img src={collections} alt=""/>
        </Box>
        <Typography variant="body1">Adicione seu primeiro projeto</Typography>
        <Typography variant="body2">Compartilhe seu talento com milhares de pessoas</Typography>
      </Box>
    </Box> 
   
  )
}