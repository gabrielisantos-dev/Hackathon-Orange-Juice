import { Box, ThemeProvider, Link, Typography,
   Autocomplete, TextField, CircularProgress } from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import CardPerfil from '../components/meu-portfolio/CardPerfil';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import ListaProjetos from '../components/meu-portfolio/ListaProjetos';
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../context/UserContext';
import profilePicture from '../assets/profile-picture/user-orange.png';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import figuraProjeto from '../assets/projects/project1.svg'
import figuraProjeto1 from '../assets/projects/project1.svg'
import EditProjectModal from '../components/modals/EditProjectModal'
import {mock, mockBdResponseAllProjects} from '../utils/mock'
import Loading from '../components/loading/Loading'
import axios from 'axios';

export default function MeuPortfolio(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm')) 
  
  const {dadosDoUsuario, setDadosDoUsuario, reqRespostaBdUser,
          dadosProjetosDoUsuario, setDadosProjetosDoUsuario,reqRespostaBdUserList,erroUserList } = useContext(UserContext)
  

  const {nome, email, sobrenome} = dadosDoUsuario

  const [respostaBd, setRespostaBd] = useState()


  const [cardSelecionado, setCardSelecionado] = useState({})

  const [tagProjeto, setTagProjeto] = useState(dadosProjetosDoUsuario)
  const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  
  const arrayTags = []
  tagProjeto.map(item => arrayTags.push(item.tags))
  
 
  const tagsUnicas = arrayTags.filter((item, index, self) => {
    return self.indexOf(item) === index
  });

  const [openEditProjectModal, setOpenEditProjectModal] = useState(false)

  const [openModalProjeto, setOpenModalProjeto] = useState(false)

  const handleOpenModalProjeto = () =>{

    openModalProjeto ? setOpenModalProjeto(false) : setOpenModalProjeto(true)
          
  }

  const handleEditProjectModal = () =>{

    openEditProjectModal ? setOpenEditProjectModal(false) : setOpenEditProjectModal(true)
          
  }
  
  
// console.log('dadosDoUsuario', dadosDoUsuario)
const { user} = dadosProjetosDoUsuario
  useEffect(()=>{
    const token = localStorage.getItem('token')
    reqRespostaBdUserList(token)
  },[]) 

 

  return(
  <ThemeProvider theme={theme}>
    <>
    
    {dadosProjetosDoUsuario &&(
    <Box sx={{marginBottom:'70px'}}>    
     
      {dadosDoUsuario.length === 0 ? (<Loading/>) : (<CardPerfil
        pais='Brasil'        
        avatar={profilePicture}        
        nome={nome}
        marginAuto='auto'
        marginTop={responsivo1 ? '185px' : '49px'}
        flexDirection= {responsivo1 ? 'row' : 'column'}
        width={responsivo1 ? '364px' : '312px'}
        height={responsivo1 ? '122px' : '236px'}
        gapCard={responsivo1 ? '42px' : '5px'}
        alignItens={!responsivo1 ? 'center' : null}
        marginBottomTyp={!responsivo1 ? '10px' : null}
        buttonOnOff={dadosProjetosDoUsuario}
        openModalProjeto={openModalProjeto}
        setOpenModalProjeto={setOpenModalProjeto}
        handleOpenModalProjeto={handleOpenModalProjeto}
        
      />
      )}
      
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
      <Typography variant='h6'sx={{}} >Meus projetos</Typography>
    
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={tagsUnicas.map((option,index) => option)}
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
        {dadosProjetosDoUsuario.length === 0 && erroUserList !== 'Nenhum projeto foi encontrado!' ? (<Loading/>) : (
        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>
          
          {/* {cardPerfil.length === 0 ? */}
          {/* {cardPerfil[0].length < 1 || cardPerfil[0] === null || cardPerfil[0] === undefined ? */}
          {dadosProjetosDoUsuario.length < 1 || dadosProjetosDoUsuario === null || dadosProjetosDoUsuario === undefined ?

          <Link 
          onClick={()=>{handleOpenModalProjeto()}} 
          underline='none'
          width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
          style={{cursor:'pointer'}}
          >
            <ListaProjetos />
          </Link>
          
          : null}

          { tagsSelecionadas.length > 0 
            
            ?
          dadosProjetosDoUsuario.map((itemCard, index) => {

              const tag = tagsSelecionadas.filter(itemTag => itemCard.tags === itemTag)
              
            
            if(tag.length > 0){
                
                return(

              <CardProjeto 
                key={index}
                width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
                color='neutral.dark'
                colorIconMenu='secondary.secondaryLight'
                avatar={profilePicture}
                widthAvatar='24px'
                heightAvatar='24px'               
                chipsHeight='32px'
                nome={itemCard.user.nome}
                labelChip={itemCard.tags}               
                data={itemCard.date}
                imagem={itemCard.image}
                openModalProjeto={openModalProjeto}
                setOpenModalProjeto={setOpenModalProjeto}
                handleOpenModalProjeto={handleOpenModalProjeto}
                
                openEditProjectModal={openEditProjectModal}
                setOpenEditProjectModal={setOpenEditProjectModal}
                handleEditProjectModal={handleEditProjectModal}

                cardSelecionado={cardSelecionado}
                setCardSelecionado={setCardSelecionado}
                itemCard={itemCard}

                >           
              </CardProjeto>
                )
              }
          })
          : dadosProjetosDoUsuario.map((itemCard, index) => {
            return(

              <CardProjeto 
                key={index}
                width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
                color='neutral.dark'
                colorIconMenu='secondary.secondaryLight'
                avatar={profilePicture}
                widthAvatar='24px'
                heightAvatar='24px'                
                chipsHeight='32px'
                nome={itemCard.user.nome}
                labelChip={itemCard.tags}             
                data={itemCard.date}
                imagem={itemCard.image}
                openModalProjeto={openModalProjeto}
                setOpenModalProjeto={setOpenModalProjeto}
                handleOpenModalProjeto={handleOpenModalProjeto}

                openEditProjectModal={openEditProjectModal}
                setOpenEditProjectModal={setOpenEditProjectModal}
                handleEditProjectModal={handleEditProjectModal}

                cardSelecionado={cardSelecionado}
                setCardSelecionado={setCardSelecionado}
                itemCard={itemCard}
                >           
              </CardProjeto>
                )
              })          
          }
          
        </Box>
        )}


      </Box>     
    </Box>
    ) }
        
    </>     
  </ThemeProvider>
  )
}