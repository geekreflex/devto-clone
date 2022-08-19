import React from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../styles/DefaultStyles';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../features/authSlice';

const SignoutConfirm = () => {
  const dispatch = useDispatch();
  const onSignout = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/logout`;
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
