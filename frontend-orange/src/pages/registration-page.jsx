import ImagemCadastro from '../components/ImagemCadastro';
import CadastroForms from '../components/CadastroForms';
import TextCadastro from '../components/TextCadastro';
import { Box } from '@mui/material';
import style from '../styles';

const RegistrationPage = () => {

    return (
        <Box sx={{display: 'flex'}}>
            <Box>
            <ImagemCadastro style={style.imageContainer}/>
            </Box>
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                marginTop:'210px',
                alignItems:'center',
            }}
            style={style.mainContainer}
            >
            <TextCadastro />
            <CadastroForms style={style.formularioContainer}/>
            </Box>
        </Box>
    )
}

export default RegistrationPage;