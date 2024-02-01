import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField, Button} from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import { useState } from "react";
import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';
import {mock} from '../utils/mock';


export default function DescobrirDesktop(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  
  const [cardPerfil, setCardPerfil] = useState(mock)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);  
  const handleClose = () => setOpen(false);

  const [tagProjeto, setTagProjeto] = useState(cardPerfil)
  const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  const arrayTags = []
  
  tagProjeto.map(item => arrayTags.push(item.tag)) 
  const tagUnicas = arrayTags.filter((item, index, self) => {
    return self.indexOf(item) === index
  });

  const [openModalProjeto, setOpenModalProjeto] = useState(false)

  

  

  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Header
        avatar={cardPerfil[0].avatar} 
        email={cardPerfil[0].email} 
        nome={cardPerfil[0].nome}
        pais={cardPerfil[0].pais}
      />
      <Typography 
        sx={{
          margin:responsivo1 ? '112px 268px' : '55px 24px',
          textAlign: 'center'
          }}
          variant={responsivo1 ? "h4" : "h5"}
          color='primary.main'
          >
            Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
      </Typography>
      
      
    <Box sx={{margin:'0px 32px', marginTop:'56px'}}>
        
      <Box 
            color='neutral.darkest'
            sx={{
              display:'flex',
              flexDirection:'column',
              opacity:'60%',
              fontWeight:'500',
              lineHeight:'20px', 
              marginBottom:'40px',
              gap:'7px'        
              }}          
              >
          
        
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={tagUnicas.map((option,index) => option)}
            multiple= {true}
            onChange={(event, value)=>{setTagsSelecionadas(value)}}
            renderInput={(params) => (
              <TextField
              sx={{
                width:responsivo1 ? '513px' : '312px',
                height:'56px'
                }}
              {...params}
                
                label="Buscar tags"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',            
                }}
              />
            )}
          />
      </Box>

      <Box sx={{
        display:'flex',
        gap:'26px',
        flexWrap:'wrap'
        }}>
          
    

          { tagsSelecionadas.length > 0 
            
            ?
          cardPerfil.map((itemCard, index) => {

              const tag = tagsSelecionadas.filter(itemTag => itemCard.tag === itemTag)              
            
            if(tag.length > 0){
                
                return( 
              <Link              
              key={index}
              sx={{
                width:responsivo1 ? 'calc(33.33% - 17.33px)' :'100%',
                textDecoration:'none',
                cursor:'pointer'
              }}
              onClick={()=>{handleOpen()}}
                >           
           
              <CardProjeto                 
                width='100%'
                color='neutral.dark'
                colorIconMenu='secondary.secondaryLight'
                avatar={itemCard.avatar}
                widthAvatar='24px'
                heightAvatar='24px'               
                chipsHeight='32px'
                nome={itemCard.nome}
                labelChip={itemCard.tag}               
                data={itemCard.data}
                imagem={itemCard.urlImagem}
                iconMenu={'none'}                       
                /> 
                </Link>       
                     
                )
              }
          })
          : cardPerfil.map((itemCard, index) => {

              return(                
                
                <Link
                  key={index} 
                  sx={{
                    width:responsivo1 ? 'calc(33.33% - 17.33px)' :'100%',
                    textDecoration:'none',
                    cursor:'pointer'
                  }}
                  onClick={()=>{handleOpen()}}                  
                    >
                
                <CardProjeto                   
                  width='100%'
                  color='neutral.dark'
                  colorIconMenu='secondary.secondaryLight'
                  avatar={itemCard.avatar}
                  widthAvatar='24px'
                  heightAvatar='24px'                
                  chipsHeight='32px'
                  nome={itemCard.nome}
                  labelChip={itemCard.tag}             
                  data={itemCard.data}
                  imagem={itemCard.urlImagem}
                  iconMenu={'none'}                                   
                  />
                </Link>           
                
                  )
                })          
          }
          
        </Box>
      </Box>
    </Box>     

    {open ?  
    
      <ModalProjeto
      open={open}
      onClose={handleClose}
      avatar={cardPerfil[0].avatar}
      nome={cardPerfil[0].nome}
      data={cardPerfil[0].data}
      labelChip={cardPerfil[0].tag}      
      tituloProj={cardPerfil[0].tituloProj}
      imagem={cardPerfil[0].urlImagem}
      descricao={cardPerfil[0].descricao}
      
      />
    : null} 
   
  </ThemeProvider>
  )
}