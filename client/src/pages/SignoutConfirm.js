import React from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../styles/DefaultStyles';

const SignoutConfirm = () => {
  const onSignout = () => {
    const url = `${process.env.REACT_APP_API_URL}/auth/logout`;
    window.location.href = url;
  };
  return (
    <Wrap>
      <Main>
        <h2>Are you sure you want to sign out?</h2>
        <ButtonFill onClick={onSignout}>Yes, Sign me out</ButtonFill>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 30px;
  }
`;

export default SignoutConfirm;
