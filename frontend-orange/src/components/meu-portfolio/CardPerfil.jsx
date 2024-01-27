import { Box, Typography, Button, ThemeProvider } from "@mui/material";
import profilePicture from '../../assets/profile-picture/picture.svg'; 
import {theme} from '../../utils/Theme'
import { useState } from "react";



export default function CardPerfil(){


  const [pais, setPais] = useState('Brasil')
  const [avatar, setAvatar] = useState(profilePicture)
  const [nomePerfil, setNomePerfil] = useState('John Doe')

 return(
  <ThemeProvider theme={theme}>
    <Box 
      sx={{
        display:'flex',
        width:'364px',
        height:'122px',     
        gap:'42px'
        }}
        >
      <Box>
        <img src={avatar} alt="Imagem de perfil do usuário" />
      </Box>
      <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
          }}
          >
        <Box 
          sx={{
            display:'flex',
            flexDirection:'column',
            width:'155px',
            height:'56px',
            gap:'16px'
            }}
            >
          <Typography variant="h5">{nomePerfil}</Typography>
          <Typography variant="subtitle1" sx={{opacity:'50%'}}>{pais}</Typography>          
        </Box>       
          <Button 
            variant="contained"
            size='' 
            disabled            
            sx={{
              width:'200px',
              padding:'8px 22px 8px 22px',
              fontWeight:'500',
              lineHeight:'26px'
            }}
            >
              adicionar projeto            
          </Button>
      </Box>
    </Box>
  </ThemeProvider>
 )
}