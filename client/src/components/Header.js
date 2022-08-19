import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import Logo from './excerpts/Logo';
import AuthLinks from './auth/AuthLinks';

const Header = () => {
  useEffect(() => {}, []);
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <HeaderLeft>
            <Logo />
          </HeaderLeft>
          <HeaderRight>
            <AuthLinks />
          </HeaderRight>
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;

const HeaderInner = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;
