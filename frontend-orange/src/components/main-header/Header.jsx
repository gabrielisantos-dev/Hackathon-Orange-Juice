
import { Box, ThemeProvider, Typography,
         Button, Menu, MenuItem, Divider, useMediaQuery} from "@mui/material";
import {theme} from '../../utils/Theme';
import * as React from 'react'

import logoOrange from '../../assets/logo-orange/logo-orange.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import LogoutIcon from '@mui/icons-material/Logout';




export default function MainHeader(props){

  const responsivo = useMediaQuery(theme.breakpoints.up('sm'))

 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

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
            <Box >

                <Button                  
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}                  
                >
                  <MenuIcon sx={{color:'neutral.lightest'}}/>
                </Button>
                <Menu
               
                transformOrigin={{horizontal:'left'}}
                slotProps={{
                  paper: {
                    sx: {
                      width: '250px',
                                           
                    },
                  }
                }}
                  sx={{marginTop:'18px'}}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  
                > 
                <Box sx={{margin:'15px 0px 15px 15px'}}>
                  <Typography fontWeight='600'>{props.nome}</Typography> 
                  <Typography>{props.email}</Typography> 
                </Box>
                  <Divider/>
                  <MenuItem onClick={handleClose}><Typography variant='body1' >Meus projetos</Typography></MenuItem>
                  <MenuItem onClick={handleClose}><Typography variant='body1' >Descobrir</Typography></MenuItem>
                  <Divider/>
                  <MenuItem onClick={handleClose} sx={{gap:'10px'}}>
                    <LogoutIcon/>
                    <Typography>
                    Sair
                    </Typography>                    
                  </MenuItem>
                </Menu>  
                
              

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
            <img src={props.avatar} alt="Figura de perfil" width='40px' height='40px' />
          </Box>
          <Box color='neutral.lightest'>
            <NotificationsIcon/>
          </Box>
        </Box>
            
      </Box>
    </ThemeProvider>
  )
}