import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextField, Grid, Alert } from '@mui/material';
import styles from '../styles.jsx';

const CadastroFormulario = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    if (nome && sobrenome && email && senha) {
      // Simulando uma requisição assíncrona para o backend
      setTimeout(() => {
        setMensagem('Cadastro feito com sucesso');
        onCadastro('success');
      }, 2000);
    } else {
      setMensagem('Por favor, preencha todos os campos.');
      onCadastro('error');
    }
  };


  return (
    <>
    <div>
    {mensagem && (
        <Alert
          severity={nome && sobrenome && email && senha ? 'success' : 'error'}
          variant="filled"
          style={{ marginTop: 10 }}
        >
          {mensagem}
        </Alert>
      )}
    </div>
    <form style={styles.formularioContainer}>
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
        style={{ backgroundColor: '#FF5522', color: 'white', marginTop: '20px' }}
      >
        CADASTRAR
      </Button>
    </form>
    </>
  );
};

CadastroFormulario.propTypes = {
  onCadastro: PropTypes.func.isRequired,
};

export default CadastroFormulario;