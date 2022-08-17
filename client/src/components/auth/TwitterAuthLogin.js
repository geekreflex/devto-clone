import React from 'react';

const TwitterAuthLogin = () => {
  const onTwitterLogin = () => {
    window.location.href = 'http://localhost:8400/auth/github';
  };

  return (
    <div>
      <button onClick={onTwitterLogin}>Login with Twitter</button>
    </div>
  );
};

export default TwitterAuthLogin;
