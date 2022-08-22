import React, { useRef } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { BASE_URL } from '../../utils/constants';

const GithubAuthLogin = () => {
  const githubBtnRef = useRef();

  const onGithubLogin = () => {
    const url = `${BASE_URL}/auth/github`;
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
