import {useForm} from 'react-hook-form';
import { useState } from 'react';
import {Box, TextField, Typography, Button, Link,
        InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {validarEmail} from '../../utils/validate'



export default function FormularioLogin(props){


  const [showPassword, setShowPassword] = useState(false);
  const emailAdress = 'Email'
  const password = 'Password'

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = async (data) => {
    
    
    console.log(data)
}
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
};

  return(
    <Box sx={{width: props.boxWidth, height: '271px'}}>
      <Box sx={{width: props.widthTitle, height: props.heightTitle}}>
        <Typography variant={props.titulo}>Faça login com email</Typography>
      </Box>
      <Box
        component='form'
        sx={{
          
          width: props.formWidth,
          height: props.formHeight,
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
          }}
          onSubmit={handleSubmit(onSubmit)}
          >        
   
        <TextField                   
          variant='outlined'
          fullWidth
          label="Email adress"
          error={!!errors?.Email}
          helperText={errors?.Email ? errors.Email.message : null}
          {...register(emailAdress, {
            required: 'Campo Obrigatório',
           
            pattern:{
              value:validarEmail,
              message: 'Email inválido'
            }
          })}
          />
          <TextField          
          type={showPassword ? 'text' : 'password'}          
          variant='outlined'
          fullWidth
          label="Password"
          error={!!errors?.Password}
          helperText={errors?.Password ? errors.Password.message : null}
          {...register(password, {
            required: 'Campo Obrigatório',
            minLength: 6,
            pattern:{
              value:'',
              message: 'Password inválido'
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
          variant='contained'
          color='secondary'
          sx={{
            width:props.buttonWidth,
            height:props.buttonHeight,
            padding:props.paddingButton
            }}
            type='submit'            
            >
              Entrar
        </Button>
        <Box>
          <Link
            color='neutral.main'
            marginTop='18px'
            fontWeight='400'
            fontSize='16px'
            lineHeight='16px'
            letterSpacing='0.15px'
            underline='none'
            href='#'
            > Cadastre-se</Link>
        </Box>
      </Box>
    </Box>
    
  )
}
