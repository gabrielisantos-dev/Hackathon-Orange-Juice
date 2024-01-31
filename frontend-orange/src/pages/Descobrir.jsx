import {theme} from '../utils/Theme'
import {useMediaQuery} from '@mui/material/';
import DescobrirDesktop from './DescobrirDesktop';
import DescobrirMobile from './DescobrirMobile';
import { mock } from '../utils/mock';

export default function Descobrir(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))

  
  
  return(
    <>
      {responsivo1 ? <DescobrirDesktop /> : <DescobrirMobile /> }
    </>
   )
}