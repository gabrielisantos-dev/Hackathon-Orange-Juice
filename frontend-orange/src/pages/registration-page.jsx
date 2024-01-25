import { Grid } from '@mui/material';
import ImagemCadastro from '../components/ImagemCadastro';
import CadastroForms from '../components/CadastroForms';
import TextCadastro from '../components/TextCadastro';
import styles from '../styles';

const RegistrationPage = () => {
  return (
    <Grid container spacing={0} sx={styles.mainContainer}>
      <Grid item xs={12} md={6}>
        <ImagemCadastro style={styles.imageContainer} />
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="center">
        <Grid item xs={12} sx={styles.formularioContainer}>
          <TextCadastro/>
          <CadastroForms />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
