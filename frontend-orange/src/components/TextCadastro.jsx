import { Box,Typography } from '@mui/material';

const textCadastro = () => {
    return (
        <Box>
            <Typography
            variant="h2"
            sx={{
                color: '#222244',
                width: '256px',
                height: '40px',
                top: '271px',
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '48px',
                lineHeight: '40px',
                textAlign: 'center',
            }}
            >Cadastre-se</Typography>
        </Box>
    );
}

export default textCadastro;