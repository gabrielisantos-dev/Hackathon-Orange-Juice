import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



export default function ModalProjeto(props) {
 
  return (
    
      //modal precisater uma tag filho inicial
      <Modal
        open={props.open}
        // onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:'scroll'}}
      >  
      <div style={{backgroundColor: '#FFF'}}>      
        <Box 
        
          sx={{
            position: 'absolute',
            top: '589px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper',
            // boxShadow: 24,
            p: 3,                 
          }}      
          >
        <Box sx={{display:'flex', justifyContent:'right'}}>
          <CloseIcon onClick={props.onClose} style={{cursor:'pointer'}}/>
        </Box> 
           
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0px 25px'}}>
          <Box sx={{display:'flex', gap: '12px', alignItems:'center'}}>
            <img src={props.avatar} alt="Imagem usuário" width='40px' height='40px' />
            <Box>
              <Typography variant='subtitle1'>{props.nome}</Typography>
              <Typography variant='subtitle1'>{props.data}</Typography>
            </Box>
          </Box>            
          <Typography variant='h5'>{props.tituloProj}</Typography>            
          <Box sx={{display:'flex', gap:'5px'}}>
            <Chip label={props.labelChip1}/>
            <Chip label={props.labelChip2}/>
          </Box>         
          </Box>          
          <Box          
            sx={{display:'flex', justifyContent:'center', mt:2}}
            >
                <img src={props.imagem} alt="" width='90%' />      
          </Box>
          <Box sx={{height:'150px', display:'flex', flexDirection:'column', justifyContent:'space-between', margin:'30px 25px'}}>
            <Typography variant='body1'>{props.descricao}</Typography>
            <Box >
              <Typography variant='subtitle1'>Download</Typography>
              <Link href='#'>https://gumroad.com/products/wxCSL</Link>
            </Box>
          </Box>
        </Box>
        
        </div>
      </Modal>
    
  );
}