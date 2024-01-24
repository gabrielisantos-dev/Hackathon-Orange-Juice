import { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

const CadastroFormulario = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    // Simulando uma requisição assíncrona para o backend
    setTimeout(() => {
      setMensagem('Cadastro feito com sucesso');
    }, 2000);
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome"
            variant="outlined"
            required
            fullWidth
            autoFocus
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sobrenome"
            variant="outlined"
            required
            fullWidth
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email address"
            type="email"
            variant="outlined"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            fullWidth
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleCadastro}
        style={{ marginTop: 20, backgroundColor: '#FF5522'}}
      >
        CADASTRAR
      </Button>
      {mensagem && <Typography style={{ color: 'green' }}>{mensagem}</Typography>}
    </form>
  );
};

export default CadastroFormulario;
