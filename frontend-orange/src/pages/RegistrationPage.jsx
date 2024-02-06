import { Box, useMediaQuery } from '@mui/material';
import ImagemCadastro from '../components/tela-cadastro/ImagemCadastro.jsx';
import CadastroFormulario from '../components/tela-cadastro/CadastroFormulario.jsx'
import TextCadastro from '../components/tela-cadastro/TextCadastro.jsx';
import styles from '../styles.jsx';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState, useContext} from 'react'
import { UserContext } from '../context/UserContext.jsx';

const RegistrationPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1300px)');
  const navigate = useNavigate()
  const {redirCadastro} = useContext(UserContext)

  console.log(redirCadastro)
  
  useEffect(()=>{
    if(redirCadastro){
      navigate('/login')
    }
  },[redirCadastro])

  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={{
          ...styles.imageContainer,
          display: isSmallScreen ? 'none' : 'block',
          position: 'absolute',
          left: '0',
        }}
      >
        <ImagemCadastro />
      </Box>
      <Box sx={styles.formularioContainer}>
        <TextCadastro />
        <CadastroFormulario />
      </Box>
    </Box>
  );
};

export default RegistrationPage;
