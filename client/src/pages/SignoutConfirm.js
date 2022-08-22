import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../styles/DefaultStyles';
import { BASE_URL } from '../utils/constants';

const SignoutConfirm = () => {
  useEffect(() => {
    console.log(BASE_URL);
  }, [BASE_URL]);

  const onSignout = () => {
    const url = `${BASE_URL}/auth/logout`;
    window.location.href = url;
  };
  return (
    <Wrap>
      <Main>
        <h2>Are you sure you want to sign out?</h2>
        <ButtonFill>
          <button style={{ padding: '15px 20px' }} onClick={onSignout}>
            Yes, Sign out
          </button>
        </ButtonFill>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 23px;
    margin-bottom: 10px;
  }
`;

export default SignoutConfirm;
