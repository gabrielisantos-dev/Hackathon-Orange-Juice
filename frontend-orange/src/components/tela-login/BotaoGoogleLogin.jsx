import { useState } from 'react'
import { Box } from '@mui/material'
import GoogleLogin from 'react-google-login';


export default function BotaoGoogleLogin(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    const { profileObj: { name, email, imageUrl } } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoggedIn(true);
  }

  return (

    <Box>
      <GoogleLogin
      clientId='755287664476-qvq0arrdis429fdk0e2b7366cc60rtmo.apps.googleusercontent.com'
      buttonText='Continuar com o Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
        />
        {isLoggedIn ? <div>
        <h1>Informações do usuário</h1>
        <img src={profilePic} alt='Profile' />
        <p> Name: {name} </p>
        <p> Email: {email} </p>
       </div>
        : null}
    </Box>
    
  )
}