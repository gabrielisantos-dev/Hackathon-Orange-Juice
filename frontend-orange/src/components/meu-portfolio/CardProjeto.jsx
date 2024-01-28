import { Box, Typography, Chip } from "@mui/material";

import figuraProjeto from '../../assets/projects/project1.svg'

export default function CardProjeto(props){

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
          backgroundImage:`url(${figuraProjeto})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',          
          width:'100%',
          height:'100%',
          borderRadius:'5px',
          }}
          >       
      </Box>

      <Box sx={{
        display:'flex',
        marginTop:'4px',
        justifyContent:'space-between'
        
      }}>

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
         <Typography 
          variant="subtitle1">
            John Doe · 12/23
          </Typography>
        </Box>
        <Box
          sx={{
            width:props.chipsWidth,
            gap:'8px',
            display:'flex'

          }}
        >
          <Chip label={props.labelChip1}/>
          <Chip label={props.labelChip3}/>
        </Box>

      </Box>
    </Box> 
   
  )
}