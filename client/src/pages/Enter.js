import React from 'react';
import GoogleLoginAuth from '../components/auth/GoogleAuthLogin';
import GithubLoginAuth from '../components/auth/GithubAuthLogin';

const Enter = () => {
  return (
    <div>
      <h3>Enter</h3>
      <div>
        <GoogleLoginAuth />
        <GithubLoginAuth />
      </div>
    </div>
  );
};

export default Enter;
