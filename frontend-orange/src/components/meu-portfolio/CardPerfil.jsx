import { Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
// import { useState } from "react";
// import ModalProjeto from './ModalProjeto'
import AddProjectModal from '../modals/AddProjectModal'
 

export default function CardPerfil(props){ 
  
  // const [openModalProjeto, setOpenModalProjeto] = useState(false)

  // const handleOpenModalProjeto = () =>{

  //   openModalProjeto ? setOpenModalProjeto(false) : setOpenModalProjeto(true)
          
  // }

 return(
  
    <Box 
      sx={{
        display:'flex',
        flexDirection: props.flexDirection,
        width: props.width,
        height:props.height,     
        gap: props.gapCard,
        margin:props.marginAuto,
        marginTop:props.marginTop,
        alignItems:props.alignItens
        }}
        >
      <Box>
        <img 
          src={props.avatar}
        
          alt="Imagem de perfil do usuário" />
          
      </Box>
      <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
          }}
          >
        <Box 
          sx={{
            display:'flex',
            flexDirection:'column',
            width:'155px',
            height:'56px',
            gap:'0px',
            marginBottom: props.marginBottomTyp
            }}
            >
          <Typography 
            variant="h5"
            >
              {props.nome}
              
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              opacity:'50%'
              }}
            >
              {props.pais}
          </Typography>          
        </Box>       
          <Button 
            variant="contained"
            size='' 
            disabled= {props.buttonOnOff.length === 0 ? true : false}          
            sx={{
              width:'200px',
              padding:'8px 22px 8px 22px',
              fontWeight:'500',
              lineHeight:'26px',
              backgroundColor:'secondary.main'
              
            }}
            onClick={()=>{props.handleOpenModalProjeto()}}
            >
              adicionar projeto            
          </Button>
      </Box>
      {props.openModalProjeto ? 
      
        <AddProjectModal
          handleOpenModalProjeto={props.handleOpenModalProjeto}
          respBk1={props.respBk1}
        />
        
        : null}
    </Box>
  
 )
}

CardPerfil.propTypes = {
  flexDirection: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  gapCard: PropTypes.string,
  marginAuto: PropTypes.string,
  marginTop: PropTypes.string,
  alignItens: PropTypes.string,
  avatar: PropTypes.string,
  nome: PropTypes.string,
  pais: PropTypes.string,
  marginBottomTyp: PropTypes.string,
  buttonOnOff: PropTypes.string,
  handleOpenModalProjeto: PropTypes.func,
  openModalProjeto: PropTypes.bool,
  respBk1: PropTypes.object
}.isRequired;