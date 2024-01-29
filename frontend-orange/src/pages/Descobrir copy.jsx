import { Box, ThemeProvider, Link, Typography,
         Button, Modal } from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';

import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';

import { useState } from "react";
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';



export default function MeuPortfolio(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))

  const [cardPerfil] = useState({
    pais:'Brasil',
    avatar: profilePicture,
    nome:'John Doe',
    email:'john@doeux.com',
    tag:{ui:'UI', ux:'UX', web:'Web'},
    data:'12/23'
  })


  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Header
        avatar={cardPerfil.avatar} 
        email={cardPerfil.email} 
        nome={cardPerfil.nome}
        pais={cardPerfil.pais}
      />
      <Typography 
        sx={{
          margin:responsivo1 ? '112px 268px' : '24px 55px',
          textAlign: 'center'
          }}
          variant={responsivo1 ? "h4" : "h5"}
          color='primary.main'
          >
            Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</Typography>
      <Box sx={{margin:'0px 32px', marginTop:'56px'}}>
        <Box sx={{marginBottom:'40px'}}>
          <FormBuscarTags 
            width={responsivo1 ? '513px' : '312px'}
            titleForm='none'
            />
        </Box>

        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>
           <Link
            onClick={()=>{console.log('clicando')}}
            underline='none'
            style={{cursor:'pointer'}}
           > 
            <CardProjeto 
              width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
              color='neutral.dark'
              colorIconMenu='secondary.secondaryLight'
              avatar={cardPerfil.avatar}
              widthAvatar='24px'
              heightAvatar='24px'
              chipsWidth='92px'
              chipsHeight='32px'
              nome={cardPerfil.nome}
              labelChip1={cardPerfil.tag.ui}
              labelChip2={cardPerfil.tag.ux}
              labelChip3={cardPerfil.tag.web}
              data={cardPerfil.data}
              iconMenu='none'              
              >           
            </CardProjeto>
          </Link>          
        </Box>
      </Box>
    </Box>     
  </ThemeProvider>
  )
}