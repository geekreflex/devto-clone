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
      <Button style={{ marginLeft: '10px' }}>
        <Link to="/enter?state=new-user">Create account</Link>
      </Button>
    </AuthBtnWrap>
  );
};

const AuthBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default AuthLinks;
