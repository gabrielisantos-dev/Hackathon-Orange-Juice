import { Box, ThemeProvider, Link, Typography} from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import { useState } from "react";
import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';
import { mock } from '../utils/mock'

export default function VisualizacaoMobile(props){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);  
  const handleClose = () => setOpen(false);

  const [cardPerfil, setCardPerfil] = useState(mock)

  // const [cardPerfil, setCardPerfil] = useState({
  //   pais:'Brasil',
  //   avatar: profilePicture,
  //   nome:'John Doe',
  //   email:'john@doeux.com',
  //   tag:{ui:'UI', ux:'UX', web:'Web'},
  //   data:'12/23',
  //   urlImagem:figuraProjeto,
  //   tituloProj:'Ecommerce One Page',
  //   descricao: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.'
  // })


  // console.log(props.cardSelecionado)
  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Typography 
        sx={{
          margin:props.respBk1 ? '112px 268px' : '55px 24px',
          textAlign: 'center'
          }}
          variant={props.respBk1 ? "h4" : "h5"}
          color='primary.main'
          >
            {props.tituloProj}</Typography>
      <Box sx={{margin:'0px 25px', marginTop:'56px'}}>
 

        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap', justifyContent:'center'}}>
       
            <CardProjeto 
              
              color='neutral.dark'
              colorIconMenu='secondary.secondaryLight'
              avatar={props.avatar}
              widthAvatar='24px'
              heightAvatar='24px'
              chipsWidth='92px'
              chipsHeight='32px'
              nome={props.nome}
              labelChip={props.labelChip}
              data={props.data}
              iconMenu='none'
              imagem={props.imagem}             
              >           
            </CardProjeto>
        
          <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'space-between', margin:'30px 25px', width:'308px', gap:'30px'}}>
            <Typography variant='body1'>{props.descricao}</Typography>
            <Box >
              <Typography variant='subtitle1'>Download</Typography>
              <Link href='#'>https://gumroad.com/products/wxCSL</Link>
            </Box>
          </Box>
                   
        </Box>
      </Box>
    </Box>  
    {/* {open ?  
    
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
    : null}  */}
    {/* {props.respBk1 ? 
    
      <VisualizarMobile
      avatar={cardPerfil.avatar}
      nome={cardPerfil.nome}
      data={cardPerfil.data}
      labelChip1={cardPerfil.tag.ui}
      labelChip2={cardPerfil.tag.ux}
      tituloProj={cardPerfil.tituloProj}
      imagem={cardPerfil.urlImagem}
      descricao={cardPerfil.descricao}
      
      />
      
      : null}   */}
  </ThemeProvider>
  )
}