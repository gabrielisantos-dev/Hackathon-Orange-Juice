import { Box, Typography } from '@mui/material';

const TextCadastro = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: '#222244',
          width: '256px',
          height: '40px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '48px',
          lineHeight: '40px',
        }}
      >
        Cadastre-se
      </Typography>
    </Box>
  );
};

export default TextCadastro;
