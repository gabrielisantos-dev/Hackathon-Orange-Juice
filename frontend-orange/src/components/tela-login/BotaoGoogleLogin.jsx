import { useState, useEffect } from 'react';
// import { GoogleLogin, GoogleLogout } from '@react-oauth/google';

import { GoogleLogout, GoogleLogin } from 'react-google-login';
import axios from 'axios';

const BotaoGoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleSuccess = (response) => {
    setUser(response);
  };

  const handleError = (error) => {
    console.log('Falha no login:', error);
  };

  const handleLogout = () => {
    setUser(null);
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: { Authorization: `Bearer ${user.access_token}`, Accept: 'application/json' },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      {/* <h2>React Google Login</h2>
      <br />
      <br /> */}
      {profile ? (
        <div>
          <img src={profile.picture} alt="User Image" />
          <h3>User Connected</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout onSuccess={handleLogout} clientId="755287664476-qvq0arrdis429fdk0e2b7366cc60rtmo.apps.googleusercontent.com">
            <button>Logout</button>
          </GoogleLogout>
        </div>
      ) : (
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} clientId="755287664476-qvq0arrdis429fdk0e2b7366cc60rtmo.apps.googleusercontent.com">
        </GoogleLogin>
      )}
      {/* <button>Login with Google 🚀</button> */}
    </div>
  );
};

export default BotaoGoogleLogin;
