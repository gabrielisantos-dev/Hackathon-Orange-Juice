import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextField, Grid, Alert, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import styles from '../../styles.jsx';

const CadastroFormulario = ({ onCadastro }) => {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  });
  const [mensagem, setMensagem] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleCadastro = () => {
    if (!isValidEmail(form.email)) {
      setMensagem('Por favor, insira um email válido.');
      onCadastro('error');
    } else if (form.nome && form.sobrenome && form.email && form.senha) {
      setMensagem('Cadastro feito com sucesso');
      onCadastro('success');
    } else {
      setMensagem('Por favor, preencha todos os campos.');
      onCadastro('error');
    }
  };

  const isValidEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensagem('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [mensagem]);

  return (
    <>
      <Box>
        {mensagem && (
          <Alert
            severity={
              isValidEmail(form.email) && form.nome && form.sobrenome && form.email && form.senha
                ? 'success'
                : 'error'
            }
            variant="filled"
            style={styles.alert}
          >
            {mensagem}
          </Alert>
        )}
      </Box>
      <Box>
        <form style={styles.formularioContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome"
                variant="outlined"
                required
                fullWidth
                autoFocus
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sobrenome"
                variant="outlined"
                required
                fullWidth
                value={form.sobrenome}
                onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email address"
                type="email"
                variant="outlined"
                fullWidth
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
      </Box>
    </>
  );
};

CadastroFormulario.propTypes = {
  onCadastro: PropTypes.func.isRequired,
};

export default CadastroFormulario;