import { Box, ThemeProvider, Typography } from "@mui/material";
import {theme} from '../../utils/Theme';
import logoOrange from '../../assets/logo-orange/logo-orange.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePicture from '../../assets/profile-picture/picture.svg';
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "@mui/material";




export default function MainHeader(){

  const responsivo = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <ThemeProvider theme={theme}>
      <Box component='header'
        sx={{
          backgroundColor:'primary.main',
          height:'41px',
          padding:'16px 30px 16px 30px',
          border:'0px 0px 1px 0px',
          display:'flex',
          justifyContent:'space-between'
          }}>

        <Box       
          sx={{
            display: 'flex',
            gap: '100px',
            width:'712px',
            height: '41px',
            alignItems:'center'              
          }}>
          <Box sx={{display:'flex', gap:'16px', alignItems:'center'}}>
            {!responsivo ?
            <Box color='neutral.lightest'>
              <MenuIcon/>
            </Box>
             : null}
            <Box>
              <img src={logoOrange} alt="Logo Orange Juice" width='111px' height='41px'/>  
            </Box>
           </Box>

         { responsivo ? <Box 
            sx={{
              display:'flex',
              gap: '24px',
              alignItems:'center',
              width:'242px',
            }}
              >
            <Typography 
              color='neutral.lightest'
              variant='h6' 
              sx={{
                width:'130px',
                
                }}
            >
              Meus projetos
            </Typography>
            <Typography 
              color='neutral.lightest'
              variant='h6'
              
              sx={{
                width:'88px',
                fontWeight:'500'               
                }}
            >
              Descobrir
            </Typography>
          </Box> : null}      
        </Box>
        <Box
          sx={{display:'flex', alignItems:'center', gap:'16px'}}>
          <Box >
            <img src={profilePicture} alt="Figura de perfil" width='40px' height='40px' />
          </Box>
          <Box color='neutral.lightest'>
            <NotificationsIcon/>
          </Box>
        </Box>
            
      </Box>
    </ThemeProvider>
  )
}