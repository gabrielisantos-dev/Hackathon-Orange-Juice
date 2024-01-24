import Box from '@mui/material/Box'
import imagemPrincipal from '../assets/tela-login/tela-login.svg'

export default function ImagemTelaLogin(){

  return(
    <Box>
      <img src={imagemPrincipal} alt="Imagem inicial para tela de login do sistema" />
    </Box>
  )
}