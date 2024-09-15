import { Box, ThemeProvider, Link, Typography} from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import { useState } from "react";
import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';

export default function DescobrirDesktop(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);  
  const handleClose = () => setOpen(false);

  const [cardPerfil, setCardPerfil] = useState({
    pais:'Brasil',
    avatar: profilePicture,
    nome:'John Doe',
    email:'john@doeux.com',
    tag:{ui:'UI', ux:'UX', web:'Web'},
    data:'12/23',
    urlImagem:figuraProjeto,
    tituloProj:'Ecommerce One Page',
    descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
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
          margin:responsivo1 ? '112px 268px' : '55px 24px',
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
          onClick={handleOpen}
          underline='none'
          style={{cursor:'pointer'}}
          width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
          > 
            <CardProjeto 
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
              imagem={cardPerfil.urlImagem}             
              >           
            </CardProjeto>
          </Link> 
                   
        </Box>
      </Box>
    </Box>

    {open ?  
    
      <ModalProjeto
      open={open}
      onClose={handleClose}
      avatar={cardPerfil.avatar}
      nome={cardPerfil.nome}
      data={cardPerfil.data}
      labelChip1={cardPerfil.tag.ui}
      labelChip2={cardPerfil.tag.ux}
      tituloProj={cardPerfil.tituloProj}
      imagem={cardPerfil.urlImagem}
      descricao={cardPerfil.descricao}
      
      />
    : null} 
   
  </ThemeProvider>
  )
}