import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField} from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
// import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import { useState } from "react";
import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import VisualizacaoMobile from '../pages/VisualizacaoMobile';
import {mock} from '../utils/mock'

export default function DescobrirDesktop(props){
  //ok
  // const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  //ok
  // const [cardPerfil, setCardPerfil] = useState(mock)
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
  // const [tagProjeto, setTagProjeto] = useState(props.cardPerfil)
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

  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Header
        avatar={props.cardPerfil[0].avatar} 
        email={props.cardPerfil[0].email} 
        nome={props.cardPerfil[0].nome}
        pais={props.cardPerfil[0].pais}
        fecharVisualizaMobile={handleCloseMobile}
      />
      
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
          props.cardPerfil.map((itemCard, index) => {

              const tag = props.tagsSelecionadas.filter(itemTag => itemCard.tag === itemTag)              
            
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

                  {props.open ?  
    
                  <VisualizacaoMobile
                    key={index}
                    open={props.open}
                    cardSelecionado={props.cardSelecionado}
                    onClose={props.handleCloseMobile}
                    avatar={props.cardSelecionado.avatar}
                    nome={props.cardSelecionado.nome}
                    data={props.cardSelecionado.data}
                    labelChip={props.cardSelecionado.tag}      
                    tituloProj={props.cardSelecionado.tituloProj}
                    imagem={props.cardSelecionado.urlImagem}
                    descricao={props.cardSelecionado.descricao}      
                  />
                  : null} 
                

                  {/* {open ?  
    
                    <ModalProjeto
                      open={open}
                      onClose={handleCloseMobile}
                      avatar={cardSelecionado.avatar}
                      nome={cardSelecionado.nome}
                      data={cardSelecionado.data}
                      labelChip={cardSelecionado.tag}      
                      tituloProj={cardSelecionado.tituloProj}
                      imagem={cardSelecionado.urlImagem}
                      descricao={cardSelecionado.descricao}                    
                    />
                  : null} */}

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
                    props.handleOpenMobile()
                    props.setCardSelecionado(itemCard)
                  }}                                 
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
                
                {props.open ?  
    
                  <VisualizacaoMobile
                    key={index}
                    open={props.open}
                    onClose={props.handleCloseMobile}
                    chipDirection='end'
                    avatar={props.cardSelecionado.avatar}
                    nome={props.cardSelecionado.nome}
                    data={props.cardSelecionado.data}
                    labelChip={props.cardSelecionado.tag}      
                    tituloProj={props.cardSelecionado.tituloProj}
                    imagem={props.cardSelecionado.urlImagem}
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
      
        : null}
      

    {props.open ?  
    
    <VisualizacaoMobile
      open={props.open}
      onClose={props.handleCloseMobile}
      avatar={props.cardSelecionado.avatar}
      nome={props.cardSelecionado.nome}
      data={props.cardSelecionado.data}
      labelChip={props.cardSelecionado.tag}      
      tituloProj={props.cardSelecionado.tituloProj}
      imagem={props.cardSelecionado.urlImagem}
      descricao={props.cardSelecionado.descricao}      
      />
      : null} 
   
  </Box>
</ThemeProvider>
  )
}