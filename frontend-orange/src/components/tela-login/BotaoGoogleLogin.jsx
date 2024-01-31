import { Box } from '@mui/material'
import botaoGoogle from '../../assets/tela-login/entrarComGoogle.svg'
import Link from '@mui/material/Link';
export default function BotaoGoogleLogin(props){

  return (

    <Box>
      <Link href='#'><img src={botaoGoogle} alt="Botao entrar com Google" width={props.width} height={props.height}/></Link>
    </Box>
    
  )
}


