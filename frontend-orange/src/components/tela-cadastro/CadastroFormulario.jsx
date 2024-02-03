import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextField, Grid, Alert, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../../styles.jsx';
import axios from 'axios';

const CadastroFormulario = ({ onCadastro }) => {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  });
  const [mensagem, setMensagem] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isValidForm = () => {
    return (
      isValidEmail(form.email) &&
      isOnlyLetters(form.nome) &&
      form.nome.length >= 3 &&
      form.nome.length <= 30 &&
      isOnlyLetters(form.sobrenome) &&
      form.sobrenome.length >= 3 &&
      form.sobrenome.length <= 40 &&
      isValidPassword(form.senha)
    );
  };
  
  const isOnlyLetters = (value) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value);
  };
  
  const handleCadastro = async () => {
    try {
      
      const response = await axios.post('https://orange-9dj9.onrender.com/api/auth/register', {
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        senha: form.senha,
      });
  
      if (response.data.token) {
        // Salva o token no localStorage
        localStorage.setItem('token', response.data.token);
  
        setMensagem('Cadastro feito com sucesso');
        onCadastro('success');
      } else {
        setMensagem('Erro no cadastro. Por favor, tente novamente.');
        onCadastro('error');
      }
    } catch (error) {
      setMensagem('Erro na solicitação. Por favor, tente novamente.');
      onCadastro('error');
    }
  };
  

  const isValidEmail = (email) => {
    const regex = /^(?!.*\s).{1,20}@.{1,15}\.[a-zA-Z]{1,10}$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;
    return regex.test(password);
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
            severity={isValidForm() ? 'success' : 'error'}
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
                error={form.nome.length > 0 && (form.nome.length < 3 || form.nome.length > 30)}
                helperText={
                  form.nome.length > 0 &&
                  (form.nome.length < 3 ? 'Mínimo de 3 caracteres' : 'Máximo de 30 caracteres')
                }
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
                error={form.sobrenome.length > 0 && (form.sobrenome.length < 3 || form.sobrenome.length > 40)}
                helperText={
                  form.sobrenome.length > 0 &&
                  (form.sobrenome.length < 3 ? 'Mínimo de 3 caracteres' : 'Máximo de 40 caracteres')
                }
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
                error={form.email.length > 0 && !isValidEmail(form.email)}
                helperText={form.email.length > 0 && 'Insira um email válido'}
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
                error={form.senha.length > 0 && !isValidPassword(form.senha)}
                helperText={
                  form.senha.length > 0 &&
                  'Mínimo de 6 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número'
                }
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