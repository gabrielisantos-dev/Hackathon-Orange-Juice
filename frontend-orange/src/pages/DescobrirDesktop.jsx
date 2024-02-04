import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField, Button} from '@mui/material/';
// import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
// import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
// import { useState } from "react";
// import figuraProjeto from '../assets/projects/project1.svg'
import profilePicture from '../assets/profile-picture/user-orange.png';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import ModalProjeto from '../components/meu-portfolio/ModalProjeto';
// import {mock} from '../utils/mock';
import Loading from '../components/loading/Loading';



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
//  console.log(`Card selecionado ${props.cardSelecionado}`)
  // const { date, descricao, id, image, tags, titulo, user, links } = props.cardPerfil
  // console.log(props.cardPerfil)
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
                height:'56px',
                
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

{/* //loading================ */}
{props.listaDeProjetos.length === 0 ? ( <Loading/>) : 
    (
      <Box sx={{
        display:'flex',
        gap:'26px',
        flexWrap:'wrap'
        }}>
          
    

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
                      props.handleOpenDesk()
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
                  // nome={itemCard.user.nome}
                  nome={user.nome}
                  // labelChip={itemCard.tags}             
                  labelChip={tags}             
                  // data={itemCard.date}
                  data={date}
                  // imagem={itemCard.image}
                  imagem={image}
                  iconMenu={'none'}                                   
                  />
                  </Link>

                  {props.open ?  
                    
                    <ModalProjeto
                      open={props.open}
                      onClose={props.handleCloseDesk}
                      avatar={profilePicture}
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
          // : props.cardPerfil.map((itemCard, index) => {
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
                    props.handleOpenDesk()
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
                  // nome={itemCard.user.nome}
                  nome={user.nome}
                  // labelChip={itemCard.tags}             
                  labelChip={tags}             
                  // data={itemCard.date}
                  data={date}
                  // imagem={itemCard.image}
                  imagem={image}
                  iconMenu={'none'}                                   
                  />
                </Link>                  
                
                {props.open ?  
    
                      <ModalProjeto
                      open={props.open}
                      onClose={props.handleCloseDesk}
                      avatar={profilePicture}
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
    )}
      </Box>
    </Box>  
  </ThemeProvider>
  )
}