import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonClear, Button } from '../../styles/DefaultStyles';

const AuthLinks = () => {
  return (
    <AuthBtnWrap>
      <ButtonClear>
        <Link to="/enter">Login</Link>
      </ButtonClear>
      <Button>
        <Link to="/enter?state=new-user">Create account</Link>
      </Button>
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
