import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <div className="div">
          <Tippy content="Hello there">
            <button>My button</button>
          </Tippy>
        </div>
        <p>Home page</p>
      </Container>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  height: 1500px;
  margin-top: 100px;
  .div {
    border: 1px solid red;
    position: relative;
    width: 200px;
  }
`;

export default Home;
