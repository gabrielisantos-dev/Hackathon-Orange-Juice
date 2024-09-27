import {useForm} from 'react-hook-form';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function FormularioLogin(props){

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const emailAdress = 'Email adress'
  const password = 'Password'

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = async (data) => {
    
    
    console.log(data)
}

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
          // label="Email_adress"
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
          type='password'
          variant='outlined'
          fullWidth label="Password"
          id="fullWidth"
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