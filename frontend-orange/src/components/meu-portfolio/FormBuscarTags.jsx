import {Box, TextField, Typography, Stack, Autocomplete} from '@mui/material';
import { mock } from '../../utils/mock';
import { useState, useEffect } from 'react';

export default function FormBuscarTags(props){

 const [tagProjeto, setTagProjeto] = useState(props.tagProjeto)
 const [tagsSelecionadas, setTagsSelecionadas] = useState()
 const arrayTags = []


tagProjeto.map(item => arrayTags.push(item.tag))


const tagUnicas = arrayTags.filter((item, index, self) => {
  return self.indexOf(item) === index
})


  return (
   
    <Box 
        color='neutral.darkest'
        sx={{
          display:'flex',
          flexDirection:'column',
          opacity:'60%',
          fontWeight:'500',
          lineHeight:'20px', 
          gap:'7px'        
          }}          
          >
      <Typography variant='h6'sx={{display:props.titleForm}} >Meus projetos</Typography>
    
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={tagUnicas.map((option,index) => option)}
        multiple= {true}
        renderInput={(params) => (
          <TextField
          sx={{
            width:props.width,
            height:'56px'
            }}
          {...params}
            
            label="Buscar tags"
            InputProps={{
              ...params.InputProps,
              type: 'search',           
            }}
          />
        )}
      />
  </Box>

    
  
);
}
