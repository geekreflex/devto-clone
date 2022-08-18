import { useEffect } from 'react';
import styled from 'styled-components';
import GoogleAuthLogin from './auth/GoogleAuthLogin';
import GithubAuthLogin from './auth/GithubAuthLogin';

const Header = () => {
  useEffect(() => {}, []);
  return (
    <HeaderWrap>
      <div>
        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" />
      </div>
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
  height: 56px;
  background-color: ${(props) => props.theme.primary};
`;
