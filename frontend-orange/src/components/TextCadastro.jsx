import { Box, Typography } from '@mui/material';

const TextCadastro = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px', width: '100%' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#222244',
          fontFamily: 'Roboto',
          fontSize: '4em',
          marginRight: 'auto',
          maxWidth: '517px',
          marginLeft: '110px',
        }}
      >
        Cadastre-se
      </Typography>
    </Box>
  );
};

export default TextCadastro;
