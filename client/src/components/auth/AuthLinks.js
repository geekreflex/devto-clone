import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonClear, Button } from '../../styles/DefaultStyles';

const AuthLinks = () => {
  return (
    <AuthBtnWrap>
      <Link to="/enter">
        <ButtonClear>Login</ButtonClear>
      </Link>
      <Link to="/enter?state=new-user">
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
