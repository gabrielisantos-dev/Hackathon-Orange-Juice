import { Box, useMediaQuery } from '@mui/material';
import ImagemCadastro from '../components/tela-cadastro/ImagemCadastro.jsx';
import CadastroFormulario from '../components/tela-cadastro/CadastroFormulario.jsx'
import TextCadastro from '../components/tela-cadastro/TextCadastro.jsx';
import styles from '../styles.jsx';

const RegistrationPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1300px)');

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
