import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import Logo from './excerpts/Logo';
import AuthLinks from './auth/AuthLinks';
import { useSelector } from 'react-redux';
import NavLinks from './excerpts/NavLinks';
import SearchInput from './SearchInput';
import HamburgerIcon from '../icons/HamburgerIcon';
import SearchIcon from '../icons/SearchIcon';

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <HeaderWrap className="header">
      <Container>
        <HeaderInner>
          <HeaderLeft>
            <Menu>
              <button className="btn">
                <HamburgerIcon />
              </button>
            </Menu>
            <Logo />
            <SearchInput />
          </HeaderLeft>
          <HeaderRight>
            <Search>
              <button className="btn">
                <SearchIcon />
              </button>
            </Search>
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
  box-shadow: ${(props) => props.theme.headerShadow};
  z-index: 99999999998;
`;

const HeaderInner = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  margin-right: 10px;
  display: none;

  @media (max-width: 786px) {
    display: block;
  }
`;

const Search = styled.div`
  display: none;

  @media (max-width: 786px) {
    display: block;
  }
`;
