import { Box, ThemeProvider, Link, Typography, Stack, Autocomplete, TextField } from '@mui/material/';
import {useMediaQuery} from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import CardPerfil from '../components/meu-portfolio/CardPerfil';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import ListaProjetos from '../components/meu-portfolio/ListaProjetos';
import { useEffect, useState } from "react";
import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
import figuraProjeto from '../assets/projects/project1.svg'
import figuraProjeto1 from '../assets/projects/project1.svg'
import EditProjectModal from '../components/modals/EditProjectModal'
import {mock} from '../utils/mock'

export default function MeuPortfolio(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))  
  
  const [cardPerfil, setCardPerfil] = useState(mock)

  const [tagProjeto, setTagProjeto] = useState(cardPerfil)
  const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  const arrayTags = []
  tagProjeto.map(item => arrayTags.push(item.tag))
  
 
  const tagUnicas = arrayTags.filter((item, index, self) => {
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


  return(
  <ThemeProvider theme={theme}>
    <Box sx={{marginBottom:'70px'}}>
      <Header
         
        avatar={cardPerfil[0].avatar} 
        email={cardPerfil[0].email} 
        nome={cardPerfil[0].nome}
        pais={cardPerfil[0].pais}
      />
      <CardPerfil
        pais={cardPerfil[0].pais}
        avatar={cardPerfil[0].avatar}
        nome={cardPerfil[0].nome}
        marginAuto='auto'
        marginTop={responsivo1 ? '185px' : '49px'}
        flexDirection= {responsivo1 ? 'row' : 'column'}
        width={responsivo1 ? '364px' : '312px'}
        height={responsivo1 ? '122px' : '236px'}
        gapCard={responsivo1 ? '42px' : '5px'}
        alignItens={!responsivo1 ? 'center' : null}
        marginBottomTyp={!responsivo1 ? '10px' : null}
        buttonOnOff={cardPerfil}
        openModalProjeto={openModalProjeto}
        setOpenModalProjeto={setOpenModalProjeto}
        handleOpenModalProjeto={handleOpenModalProjeto}
      />
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

        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>
          
          {/* {cardPerfil.length === 0 ? */}
          {cardPerfil[0].length < 1 || cardPerfil[0] === null || cardPerfil[0] === undefined ?

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
          cardPerfil.map((itemCard, index) => {

              const tag = tagsSelecionadas.filter(itemTag => itemCard.tag === itemTag)
              
            
            if(tag.length > 0){
                
                return(

              <CardProjeto 
                key={index}
                width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
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
                openModalProjeto={openModalProjeto}
                setOpenModalProjeto={setOpenModalProjeto}
                handleOpenModalProjeto={handleOpenModalProjeto}

                openEditProjectModal={openEditProjectModal}
                setOpenEditProjectModal={setOpenEditProjectModal}
                handleEditProjectModal={handleEditProjectModal}

                >           
              </CardProjeto>
                )
              }
          })
          : cardPerfil.map((itemCard, index) => {
            return(

              <CardProjeto 
                key={index}
                width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
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
                openModalProjeto={openModalProjeto}
                setOpenModalProjeto={setOpenModalProjeto}
                handleOpenModalProjeto={handleOpenModalProjeto}

                openEditProjectModal={openEditProjectModal}
                setOpenEditProjectModal={setOpenEditProjectModal}
                handleEditProjectModal={handleEditProjectModal}
                >           
              </CardProjeto>
                )
              })          
          }
          
        </Box>
      </Box>
    </Box>     
  </ThemeProvider>
  )
}