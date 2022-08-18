import React, { useRef } from 'react';

const GithubAuthLogin = () => {
  const githubBtnRef = useRef();

  const onGithubLogin = () => {
    const url = `${process.env.REACT_APP_API_URL}/auth/github`;
    window.location.href = url;
  };

  return (
    <div>
      <button ref={githubBtnRef} onClick={onGithubLogin}>
        Login with Github
      </button>
    </div>
  );
};

export default GithubAuthLogin;
