import { Box, ThemeProvider } from '@mui/material';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import CardPerfil from '../components/meu-portfolio/CardPerfil';
import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import ListaProjetos from '../components/meu-portfolio/ListaProjetos';



export default function MeuPortfolio(){

  return(
    <>
      <Header/>
      <CardPerfil
        marginAuto='auto'
        marginTop='185px'
      />
      <Box sx={{margin:'0px 32px', marginTop:'56px'}}>
        <Box sx={{marginBottom:'40px'}}>
          <FormBuscarTags/>
        </Box>
        <Box sx={{display:'flex', gap:'26px', flexWrap:'wrap'}}>
          <ListaProjetos/>
          <ListaProjetos/>
          <ListaProjetos/>
          
        </Box>

      </Box>
        
    </>
  )
}