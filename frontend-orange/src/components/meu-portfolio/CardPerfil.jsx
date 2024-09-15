import { Box, Typography, Button } from "@mui/material";
 

export default function CardPerfil(props){

    

 return(
  
    <Box 
      sx={{
        display:'flex',
        flexDirection: props.flexDirection,
        width: props.width,
        height:props.height,     
        gap: props.gapCard,
        margin:props.marginAuto,
        marginTop:props.marginTop,
        alignItems:props.alignItens
        }}
        >
      <Box>
        <img src={props.avatar} alt="Imagem de perfil do usuário" />
      </Box>
      <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
          }}
          >
        <Box 
          sx={{
            display:'flex',
            flexDirection:'column',
            width:'155px',
            height:'56px',
            gap:'0px',
            marginBottom: props.marginBottomTyp
            }}
            >
          <Typography 
            variant="h5"
            >
              {props.nome}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              opacity:'50%'
              }}
            >
              {props.pais}
          </Typography>          
        </Box>       
          <Button 
            variant="contained"
            size='' 
            disabled= {props.buttonOnOff.length === 0 ? true : false}          
            sx={{
              width:'200px',
              padding:'8px 22px 8px 22px',
              fontWeight:'500',
              lineHeight:'26px',
              backgroundColor:'secondary.main'
              
            }}
            >
              adicionar projeto            
          </Button>
      </Box>
    </Box>
  
 )
}