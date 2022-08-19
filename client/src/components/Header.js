import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import Logo from './excerpts/Logo';
import AuthLinks from './auth/AuthLinks';
import { useSelector } from 'react-redux';
import NavLinks from './excerpts/NavLinks';

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <HeaderLeft>
            <Logo />
          </HeaderLeft>
          <HeaderRight>
            {!isAuth && <AuthLinks />}
            {isAuth && <NavLinks />}
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
  position: fixed;
  top: 0;
  left: 0;
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
