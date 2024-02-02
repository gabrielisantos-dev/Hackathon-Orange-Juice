import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField, Button} from '@mui/material/';
// import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
// import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
// import { useState } from "react";
// import figuraProjeto from '../assets/projects/project1.svg'
// import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';
// import {mock} from '../utils/mock';


export default function DescobrirDesktop(props){
  //ok
  // const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  //ok
  // const [cardPerfil, setCardPerfil] = useState(mock)
  //ok
  // const [open, setOpen] = useState(false);
  //ok
  // const [cardSelecionado, setCardSelecionado] = useState({})
  //ok
  // const handleOpenDesk = () => setOpen(true);
  //ok
  // const handleCloseDesk = () => setOpen(false);
  //ok
  // const [tagProjeto, setTagProjeto] = useState(props.cardPerfil)
  //ok
  // const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  //ok
  const arrayTagsDesktop = []
  //ok
  props.tagProjeto.map(item => arrayTagsDesktop.push(item.tag)) 
  //ok
  // const tagUnicas = props.arrayTags.filter((item, index, self) => {
  //   return self.indexOf(item) === index
  // });
  
  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Header
        avatar={props.cardPerfil[0].user.avatar} 
        email={props.cardPerfil[0].user.email} 
        nome={props.cardPerfil[0].user.nome}
        // pais={props.cardPerfil[0].pais}
      />
      <Typography 
        sx={{
          margin:props.respBk1 ? '112px 268px' : '55px 24px',
          textAlign: 'center'
          }}
          variant={props.respBk1 ? "h4" : "h5"}
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
            options={props.tagUnicas.map((option,index) => option)}
            multiple= {true}
            onChange={(event, value)=>{props.setTagsSelecionadas(value)}}
            renderInput={(params) => (
              <TextField
              id
              sx={{
                width:props.respBk1 ? '513px' : '312px',
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
          
    

          { props.tagsSelecionadas.length > 0 
            
            ?
          props.cardPerfil.map((itemCard, index) => {

              const tag = props.tagsSelecionadas.filter(itemTag => itemCard.tags === itemTag)              
            
            if(tag.length > 0){
                
              return(
                <>
                  <Link              
                    key={index}
                    sx={{
                      width:props.respBk1 ? 'calc(33.33% - 17.33px)' :'100%',
                      textDecoration:'none',
                      cursor:'pointer'
                    }}
                    onClick={()=>{
                      props.handleOpenDesk()
                      props.setCardSelecionado(itemCard)
                    }}
                  >
                    <CardProjeto                   
                  width='100%'
                  color='neutral.dark'
                  colorIconMenu='secondary.secondaryLight'
                  avatar={itemCard.user.avatar}
                  widthAvatar='24px'
                  heightAvatar='24px'                
                  chipsHeight='32px'
                  nome={itemCard.user.nome}
                  labelChip={itemCard.tags}             
                  data={itemCard.date}
                  imagem={itemCard.image}
                  iconMenu={'none'}                                   
                  />
                  </Link>

                  {props.open ?  
    
                    <ModalProjeto
                      open={props.open}
                      onClose={props.handleCloseDesk}
                      avatar={props.cardSelecionado.user.avatar}
                      nome={props.cardSelecionado.user.nome}
                      data={props.cardSelecionado.date}
                      labelChip={props.cardSelecionado.tags}      
                      tituloProj={props.cardSelecionado.titulo}
                      imagem={props.cardSelecionado.image}
                      descricao={props.cardSelecionado.descricao}                    
                    />
                  : null}

                </>           
                )
              }
          })
          : props.cardPerfil.map((itemCard, index) => {
            return(                
              <>
                <Link
                  key={index} 
                  sx={{
                    width:props.respBk1 ? 'calc(33.33% - 17.33px)' :'100%',
                    textDecoration:'none',
                    cursor:'pointer'
                  }}
                  onClick={()=>{
                    props.handleOpenDesk()
                    props.setCardSelecionado(itemCard)
                  }}                                 
                  >             
                <CardProjeto                   
                  width='100%'
                  color='neutral.dark'
                  colorIconMenu='secondary.secondaryLight'
                  avatar={itemCard.user.avatar}
                  widthAvatar='24px'
                  heightAvatar='24px'                
                  chipsHeight='32px'
                  nome={itemCard.user.nome}
                  labelChip={itemCard.tags}             
                  data={itemCard.date}
                  imagem={itemCard.image}
                  iconMenu={'none'}                                   
                  />
                </Link>                  
                
                {props.open ?  
    
                      <ModalProjeto
                      open={props.open}
                      onClose={props.handleCloseDesk}
                      avatar={props.cardSelecionado.user.avatar}
                      nome={props.cardSelecionado.user.nome}
                      data={props.cardSelecionado.date}
                      labelChip={props.cardSelecionado.tags}      
                      tituloProj={props.cardSelecionado.titulo}
                      imagem={props.cardSelecionado.image}
                      descricao={props.cardSelecionado.descricao}                    
                    />
                : null} 
              </>
            )
          })          
        }
          
        </Box>
      </Box>
    </Box>  
  </ThemeProvider>
  )
}