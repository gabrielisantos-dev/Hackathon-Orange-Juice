import {theme} from '../../utils/Theme'
import { Box, Typography, Chip, Link, Button } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from "react";
// import figuraProjeto from '../../assets/projects/project1.svg'
// import pencilIcon from '../../assets/icon/pencil-icon.svg'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import EditProjectModal from "../modals/EditProjectModal";
import {useMediaQuery} from '@mui/material/';
import ModalProjeto from './ModalProjeto';


export default function CardProjeto(props){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return(
    <Box 
    
    sx={{
      
      height:'298px',
      display:'flex',
      flexDirection:'column',        
      justifyContent:'center',
      width:props.width,        
    }}
    >
      <Box 
        sx={{
          backgroundImage: `url(${props.imagem})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',          
          width:'100%',
          height:'100%',
          borderRadius:'5px',
        }}
          >
         
        
            {/* ======inicio menu===== */}
       <Box>
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent:'right',
              alignItems: 'center',
              textAlign: 'center'
              }}
              >
            
            <Tooltip              
              title="Menu"
              >
              
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ mr: 2, mt:2, display:props.iconMenu}}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}               
              >
                <Avatar  
                  sx={{
                    width: 32,
                    height: 32,
                    color:'black',
                    backgroundColor:props.colorIconMenu }}
                >
                  <CreateIcon  />
                </Avatar>
                
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}            
            slotProps={{
            elevation: 0,
            paper:{
              sx: {
                width:'208px',
                overflow: 'visible',                
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',                                   
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                }
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem 
              onClick={() => {props.handleEditProjectModal()}}
              sx={{
                '&:hover':{
                  bgcolor:props.colorIconMenu
                }
              }}
              >
              Editar
            </MenuItem>
            <MenuItem
              onClick={handleClose} // INCLUIR ROTA AXIOS AQUI
              sx={{
                '&:hover':{
                  bgcolor:props.colorIconMenu
                }
              }}
              >
              Excluir
            </MenuItem>
           
          </Menu>
        </Box>
        
      </Box>

      <Box 
        sx={{
          display:'flex',
          marginTop:'4px',
          justifyContent:'space-between',         
        }}
        >

        <Box 
          color={props.color}
          sx={{display:'flex', gap:'8px', }}
        >
          <img 
            src={props.avatar}
            alt="Imagem usuario"
            width={props.widthAvatar}
            height={props.heightAvatar}
          />
          <Box 
            sx={{
              display:'flex',
              alignItems:'center',
              gap:'5px'
              }}
              >

            <Typography variant="subtitle1">{props.nome}</Typography>
            <FiberManualRecordIcon sx={{fontSize:'7px'}}/>         
            <Typography variant="subtitle1">{props.data}</Typography>
          </Box>


        </Box>
        <Box
          sx={{
            width:props.chipsWidth,
            gap:'8px',
            display:'flex',
            justifyContent:props.chipDirection

          }}
        >
          
          <Chip label={props.labelChip}/>
        </Box>
      </Box>

      {props.openEditProjectModal ?
      
        <EditProjectModal
          openEditProjectModal={props.openEditProjectModal}
          setOpenEditProjectModal={props.setOpenEditProjectModal}
          handleEditProjectModal={props.handleEditProjectModal}

        /> : null}

        {/* {props.openModalProjeto ? <ModalProjeto/> : null} */}
    
    </Box> 
  )
}