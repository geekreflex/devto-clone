import React, { useEffect, useRef } from 'react';

const GithubAuthLogin = () => {
  const githubBtnRef = useRef();
  useEffect(() => {
    setTimeout(() => ((githubBtnRef.current.disabled = false), 3000));
  }, []);

  const onGithubLogin = () => {
    const url = `${process.env.REACT_APP_API_URL}/auth/github`;
    window.location.href = url;
  };

  return (
    <div>
      <button ref={githubBtnRef} disabled onClick={onGithubLogin}>
        Login with Github
      </button>
    </div>
  );
};

export default GithubAuthLogin;
