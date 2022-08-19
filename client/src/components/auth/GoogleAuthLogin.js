import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';

const GoogleAuthLogin = () => {
  useEffect(() => {
    const init = () => {
      gapi.auth2.getAuthInstance({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    };

    gapi.load('client:auth2', init);
  }, []);

  const responseGoogle = (response) => {
    const url = `${process.env.REACT_APP_API_URL}/auth/google`;
    let idToken = response.tokenId;

    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    axios
      .post(url, { idToken }, config)
      .then(() => {
        window.location.href = '/';
      })
      .catch((err) => console.log('GOOGLE SIGNIN ERROR', err.response));
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <button
            style={{ backgroundColor: '#000000' }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login With Google
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuthLogin;
