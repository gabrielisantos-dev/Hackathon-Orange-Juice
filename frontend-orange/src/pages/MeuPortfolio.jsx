import { Box, ThemeProvider, useMediaQuery } from '@mui/material';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import CardPerfil from '../components/meu-portfolio/CardPerfil';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import ListaProjetos from '../components/meu-portfolio/ListaProjetos';
import { useState } from "react";
import profilePicture from '../assets/profile-picture/picture.svg';

export default function MeuPortfolio(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))

  const [cardPerfil] = useState({
    pais:'Brasil',
    avatar: profilePicture,
    nome:'John Doe',
    email:'john@doeux.com'
  })


  return(
    <ThemeProvider theme={theme}>
      <Header
        avatar={cardPerfil.avatar} 
        email={cardPerfil.email} 
        nome={cardPerfil.nome}
        pais={cardPerfil.pais}
      />
      <CardPerfil
        pais={cardPerfil.pais}
        avatar={cardPerfil.avatar}
        nome={cardPerfil.nome}
        marginAuto='auto'
        marginTop={responsivo1 ? '185px' : '49px'}
        flexDirection= {responsivo1 ? 'row' : 'column'}
        width={responsivo1 ? '364px' : '312px'}
        height={responsivo1 ? '122px' : '236px'}
        gapCard={responsivo1 ? '42px' : '5px'}
        alignItens={!responsivo1 ? 'center' : null}
        marginBottomTyp={!responsivo1 ? '10px' : null}
      />
      <Box sx={{margin:'0px 32px', marginTop:'56px'}}>
        <Box sx={{marginBottom:'40px'}}>
          <FormBuscarTags width={responsivo1 ? '513px' : '312px'}/>
        </Box>
        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>
          <ListaProjetos width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}/>
          <ListaProjetos width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}/>
          <ListaProjetos width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}/>
         
          
        </Box>

      </Box>
        
    </ThemeProvider>
  )
}