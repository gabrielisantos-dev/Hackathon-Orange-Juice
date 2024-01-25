import { Box, ThemeProvider, Typography } from "@mui/material";
import {theme} from '../../utils/Theme';
import logoOrange from '../../assets/logo-orange/logo-orange.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePicture from '../../assets/profile-picture/picture.svg'



export default function MainHeader(){

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
          <Box>
            <img src={logoOrange} alt="Logo Orange Juice" width='111px' height='41px'/>  
          </Box>

          <Box 
            sx={{
              display:'flex',
              gap: '24px',
              alignItems:'center',
              width:'242px'
            }}
              >
            <Typography 
              color='neutral.lightest'
              variant='h6' 
              sx={{
                width:'130px',
                
                }}
            >
              Meus Projetos
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
          </Box>       
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