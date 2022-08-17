import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleAuthLogin = () => {
  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const sendGoogleToken = (tokenId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/google`, {
        idToken: tokenId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log('GOOGLE SIGNIN ERROR', err.response));
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Login With Google</button>
        )}
      ></GoogleLogin>
    </div>
  );
};

export default GoogleAuthLogin;
