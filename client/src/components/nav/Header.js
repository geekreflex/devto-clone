import { useEffect } from 'react';
import styled from 'styled-components';
import GoogleAuthLogin from '../auth/GoogleAuthLogin';
import GithubAuthLogin from '../auth/GithubAuthLogin';

const Header = () => {
  useEffect(() => {}, []);
  return (
    <HeaderWrap>
      <div>
        <GoogleAuthLogin />
        <GithubAuthLogin />
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #333;
`;
