import {useForm} from 'react-hook-form';
import { useState } from 'react';
import {Box, TextField, Typography, Button, Link,
        InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';



export default function FormularioLogin(props){

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const [showPassword, setShowPassword] = useState(false);
  const emailAdress = 'Email adress'
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
          // width: '517px',
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
          label={emailAdress}
          id="fullWidth"
          {...register(emailAdress, {
            required: 'Campo Obrigatório',
            pattern: {
              value:'',
              message: 'Email inválido'
            }
          })}
          error={!!errors?.Email_adress}
          helperText={errors?.Email_adress ? errors.Email_adress.message : null}
        />     
        <TextField
          // type='password'
          type={showPassword ? 'text' : 'password'}
          variant='outlined'
          fullWidth label="Password"
          id="fullWidth"

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}

          {...register(password, {
            required: 'Campo Obrigatório',
            pattern:{
              value:'',
              message: 'Password inválido'
            }
          })}
          error={!!errors?.Password}
          helperText={errors?.Password ? errors.Password.message : null}
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