import {useForm} from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


export default function FormularioLogin(){

  const {register, handleSubmit} = useForm()

  const onSubmit = () => console.log('funcionando')

  return(
    <Box sx={{width: '517px', height: '271px', top: '360px', left: '628px'}}>
      <Box sx={{width: '493px', height: '24px'}}>
        <Typography variant='h5'>Faça login com email</Typography>
      </Box>
      <Box
        component='form'
        sx={{
          width: '517px',
          height: '128px',
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
          label="Email Adress"
          id="fullWidth"
          {...register('Email Adress')}
        />     
        <TextField
          variant='outlined'
          fullWidth label="Password"
          id="fullWidth"
          {...register('Password')}
          />

        <Button
          variant='contained'
          sx={{
            width:'517px',
            height:'42px',
            padding:'8px 22px 8px 22px'
            }}
            type='submit'
            >
              Entrar
        </Button>

        <Typography color='#818388' fontWeight='400' fontSize='16px' lineHeight='16px' letterSpacing='0.15px'>Cadastre-se</Typography>
      </Box>

    </Box>
    
  )
}