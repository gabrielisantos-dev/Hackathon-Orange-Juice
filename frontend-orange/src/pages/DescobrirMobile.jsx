import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField} from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
// import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import { useState } from "react";
import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/user-orange.png';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import VisualizacaoMobile from '../pages/VisualizacaoMobile';
import {mock} from '../utils/mock'

export default function DescobrirDesktop(props){
  //ok

  // const {nome, email, sobrenome} = dadosDoUsuario


  // const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  //ok
  // const [listaDeProjetos, setlistaDeProjetos] = useState(mock)
  //ok
  // const [openDescobrir, setOpenDescobrir] = useState(true);
  //ok
  // const [open, setOpen] = useState(false);
  //ok
  // const [cardSelecionado, setCardSelecionado] = useState({})
  // //ok
  // const handleOpenMobile = () => {
  //   setOpen(true)
  //   setOpenDescobrir(false)
  // }; 
  //ok 
  const handleCloseMobile = () => setOpen(false);
  //ok
  // const [tagProjeto, setTagProjeto] = useState(props.listaDeProjetos)
  //ok
  // const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  //ok
  const arrayTags = []
  //ok
  props.tagProjeto.map(item => arrayTags.push(item.tag)) 
  //ok
  const tagUnicas = arrayTags.filter((item, index, self) => {
    return self.indexOf(item) === index
  });


  

  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
   
      
      {props.openDescobrir ?
     <Box>
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

      <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>          
    
      { props.tagsSelecionadas.length > 0 
            
            ?
          props.listaDeProjetos.map((itemCard, index) => {
            const {date, descricao, id, image, tags, titulo, user} = itemCard

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
                      props.handleOpenMobile()
                      props.setCardSelecionado(itemCard)
                    }}
                  >
                    <CardProjeto                 
                      width='100%'
                      color='neutral.dark'
                      colorIconMenu='secondary.secondaryLight'
                      avatar={profilePicture}
                      widthAvatar='24px'
                      heightAvatar='24px'               
                      chipsHeight='32px'
                      nome={user.nome}
                      labelChip={tags}               
                      data={date}
                      imagem={image}
                      iconMenu={'none'}                       
                    /> 
                  </Link>

                  

                </>          
                )
              }
          })
          : props.listaDeProjetos.map((itemCard, index) => {
            const {date, descricao, id, image, tags, titulo, user} = itemCard

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
                    props.handleOpenMobile()
                    props.setCardSelecionado(itemCard)
                  }}                                 
                  >             
                <CardProjeto                   
                  width='100%'
                  color='neutral.dark'
                  colorIconMenu='secondary.secondaryLight'
                  avatar={profilePicture}
                  widthAvatar='24px'
                  heightAvatar='24px'                
                  chipsHeight='32px'
                  nome={user.nome}
                  labelChip={tags}             
                  data={date}
                  imagem={image}
                  iconMenu={'none'}                                   
                  />
                </Link>                  
                
               
  
              </>

                )
              })          
          }
          
        </Box>
      </Box>      
     </Box>       
      
        : null}
      

    {props.open ?  
    
    <VisualizacaoMobile
      key={''}
      open={props.open}
      cardSelecionado={props.cardSelecionado}
      onClose={props.handleCloseMobile}
      avatar={profilePicture}
      nome={props.cardSelecionado.user.nome}
      data={props.cardSelecionado.date}
      labelChip={props.cardSelecionado.tags}      
      tituloProj={props.cardSelecionado.titulo}
      imagem={props.cardSelecionado.image}
      descricao={props.cardSelecionado.descricao}      
                />
      : null} 
   
  </Box>
</ThemeProvider>
  )
}