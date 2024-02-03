import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  Button,
  
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

export default function FormularioLogin(props) {
  const [showPassword, setShowPassword] = useState(false);
  const emailAdress = 'email';
  const password = 'password';

  

  const [alerta, setAlerta] = useState();
  // const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   
      axios.post('https://orange-9dj9.onrender.com/api/auth/login', data)

      .then((response)=> localStorage.setItem('token', response.data.token))
      .then( ()=> localStorage.getItem('token') ? props.setLogado(true): null)
      .catch((e)=>(console.log(e)))

    }



  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const handleClick = () =>{
  //   const token = localStorage.getItem('token')

  //   .then((response)=> {
      
  //     return(
  //       response ? props.setLogado(true) : null,
  //       console.log(response)
        
  //       )

  //   }
      
  //     )

  //   // token ? props.setLogado(true) : null
  //   console.log('funcionando')
  // }
  
  return (
    <Box sx={{ width: props.boxWidth, height: '271px' }}>
      <Box sx={{ width: props.widthTitle, height: props.heightTitle }}>
        <Typography variant={props.titulo}>
          Faça login com email
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          width: props.formWidth,
          height: props.formHeight,
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant="outlined"
          fullWidth
          label="Email address"
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
          {...register(emailAdress, {
            required: 'Campo Obrigatório',
            pattern: {
              value: /^(?!.*\s).{1,20}@.{1,15}$/,
              message: 'Email inválido',
            },
          })}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          label="Password"
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
          {...register(password, {
            required: 'Campo Obrigatório',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/,
              message:
                'Senha incorreta',
            }
          })}
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
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: props.buttonWidth,
            height: props.buttonHeight,
            padding: props.paddingButton,
          }}
          type="submit"
          // onClick={handleClick}
          
        >
          Entrar
        </Button>
        <Box
        >
          <Link
            color="neutral.main"
            marginTop="18px"
            fontWeight="400"
            fontSize="16px"
            lineHeight="16px"
            letterSpacing="0.15px"
            
            href="#"
            
            to='/cadastro'
            style={{textDecoration:'none', cursor:'pointer'}}
          >
            Cadastre-se
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

FormularioLogin.propTypes = {
  boxWidth: PropTypes.string.isRequired,
  widthTitle: PropTypes.string.isRequired,
  heightTitle: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  formWidth: PropTypes.string.isRequired,
  formHeight: PropTypes.string.isRequired,
  buttonWidth: PropTypes.string.isRequired,
  buttonHeight: PropTypes.string.isRequired,
  paddingButton: PropTypes.string.isRequired,
};
