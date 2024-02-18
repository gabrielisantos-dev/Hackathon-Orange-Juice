import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import {theme} from '../utils/Theme';
import eita from '../assets/404/404.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Erro() {

  const responsivo = useMediaQuery(theme.breakpoints.up('sm'))
  const navigate = useNavigate()

  const [buttonNav, setButtonNav] = useState(false)

  const homeButtonOn = () => {
    setButtonNav(true)
  }
  
  useEffect(()=>{

    if(buttonNav){
      navigate('/')
    }

  },[buttonNav])
 
  return (
    
    <>
    { responsivo ? 
      <Box style={{margin: '200px'}}>
      <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img src={eita} alt="" width='40%'/>
        <Typography variant='h6' style={{margin: '50px 350px', textAlign:'center', fontWeight: '600'}}>
          Eita! A página que você está procurando não foi encontrada.<br/><br/>
          Ela pode ter sido abduzida, renomeada ou está temporariamente indisponível.
          Mas não se preocupe, estamos aqui para te ajudar a encontrar o caminho de volta.
        </Typography>

        <Button
          onClick={homeButtonOn}
          variant='contained'
          color='secondary'
          sx={{
            width: 'Hug (109px)',
            height: 'Hug (42px)',
            padding: '8px 22px',
            borderRadius: '4px',
            backgroundColor: '#FF5522',
            color: '#FCFDFF',
          }}
        >
        <b>VOLTAR PARA HOME</b>
        </Button>
      </Box>
    </Box>
    :
    <Box style={{margin: '150px 50px'}}>
      <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img src={eita} alt="" width='70%'/>
        <Typography style={{margin: '50px 0', textAlign:'center', fontWeight: '600'}}>
          Eita! A página que você está procurando não foi encontrada.<br/><br/>
          Ela pode ter sido abduzida, renomeada ou está temporariamente indisponível.
          Mas não se preocupe, estamos aqui para te ajudar a encontrar o caminho de volta.
        </Typography>

        <Button
          onClick={homeButtonOn}
          variant='contained'
          color='secondary'
          sx={{
            width: 'Hug (109px)',
            height: 'Hug (42px)',
            padding: '8px 22px',
            borderRadius: '4px',
            backgroundColor: '#FF5522',
            color: '#FCFDFF',
          }}
        >
        <b>VOLTAR PARA HOME</b>
        </Button>
      </Box>
    </Box>   
  }
  </>
  )
}

