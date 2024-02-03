import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const history = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) {
      history.push('/');
    }
  };

  return (
    <GoogleLogin
      clientId="755287664476-qvq0arrdis429fdk0e2b7366cc60rtmo.apps.googleusercontent.com"
      buttonText="Continuar com o Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      redirectUri={'http://localhost:5173/'}
    />
  );
};

export default GoogleLoginButton;
