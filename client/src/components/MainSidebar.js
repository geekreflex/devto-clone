import React, { useEffect } from 'react';
import styled from 'styled-components';
import LeftSidebar from './LeftSidebar';
import {
  IoCloseSharp,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitch,
  IoLogoTwitter,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidenav } from '../features/actionSlice';

const MainSidebar = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state) => state.action);
  const onClose = () => {
    dispatch(toggleSidenav(false));
  };

  useEffect(() => {
    if (sidenav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [sidenav]);

  const socialList = [
    { link: 'https://twitter.com', logo: <IoLogoTwitter /> },
    { link: 'https://twitter.com', logo: <IoLogoFacebook /> },
    { link: 'https://twitter.com', logo: <IoLogoGithub /> },
    { link: 'https://twitter.com', logo: <IoLogoInstagram /> },
    { link: 'https://twitter.com', logo: <IoLogoTwitch /> },
  ];

  return (
    <>
      <Overlay visible={sidenav} onClick={onClose} />
      <Main visible={sidenav}>
        <div className="sidenav-top">
          <h3>Dev Community 👩‍💻👨‍💻</h3>
          <button onClick={onClose} className="btn">
            <IoCloseSharp />
          </button>
        </div>
        <LeftSidebar close={onClose} />
        <div className="socials">
          {socialList.map((social, index) => (
            <a onClick={onClose} key={index} href={social.link} className="btn">
              {social.logo}
            </a>
          ))}
        </div>
      </Main>
    </>
  );
};

const Main = styled.div`
  position: fixed;
  z-index: 999999999998;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.primary};
  width: 300px;
  height: 100vh;
  padding: 20px 10px;
  overflow-y: auto;
  margin-left: ${(props) => (props.visible ? '0' : '-300px')};
  transition: all 300ms;

  .sidenav-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    width: 230px;
    a {
      font-size: 22px;
    }
  }

  button {
    font-size: 20px;
  }
`;
const Overlay = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  z-index: 999999999998;
`;

export default MainSidebar;
