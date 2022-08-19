import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonClear, Button } from '../../styles/DefaultStyles';

const AuthLinks = () => {
  return (
    <AuthBtnWrap>
      <Link to="#">
        <ButtonClear>Login</ButtonClear>
      </Link>
      <Link to="#">
        <Button>Create account</Button>
      </Link>
    </AuthBtnWrap>
  );
};

const AuthBtnWrap = styled.div`
  display: flex;

  a:first-child {
    margin-right: 8px;
  }
`;

export default AuthLinks;
