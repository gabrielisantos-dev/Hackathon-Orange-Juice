
import { CircularProgress, Box } from "@mui/material"





export default function Loading(props){
  return(

    <Box sx={{height:'100%',width:'100%', display:'flex', justifyContent:'center'}}>
      <CircularProgress size='50px' sx={{margin:'auto', padding: '20px'}}/>
    </Box>
  )
}