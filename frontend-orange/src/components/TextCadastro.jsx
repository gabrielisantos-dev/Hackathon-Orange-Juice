import { Box,Typography } from '@mui/material';

const textCadastro = () => {
    return (
        <Box>
            <Typography
            font='Roboto'
            weigth='400'
            size='48px'
            lineHeight='40px'
            align='center'
            >
                <h3 className="register">Cadastre-se</h3>
            </Typography>
        </Box>
    );
}

export default textCadastro;