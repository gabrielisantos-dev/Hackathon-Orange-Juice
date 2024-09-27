import { Box, useMediaQuery } from '@mui/material';
import ImagemCadastro from '../components/tela-cadastro/ImagemCadastro';
import CadastroForms from '../components/tela-cadastro/CadastroForms';
import TextCadastro from '../components/tela-cadastro/TextCadastro';
import styles from '../styles';

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
        <CadastroForms />
      </Box>
    </Box>
  );
};

export default RegistrationPage;
