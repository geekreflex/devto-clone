import React, { useRef } from 'react';
import { IoLogoGithub } from 'react-icons/io5';

const GithubAuthLogin = () => {
  const githubBtnRef = useRef();

  const onGithubLogin = () => {
    const url = `${process.env.REACT_APP_API_URL}/auth/github`;
    window.location.href = url;
  };

  return (
    <div>
      <button
        style={{ backgroundColor: '#24292e' }}
        ref={githubBtnRef}
        onClick={onGithubLogin}
      >
        <i className="auth-btn-icon">
          <IoLogoGithub />
        </i>
        Login with Github
      </button>
    </div>
  );
};

export default GithubAuthLogin;
