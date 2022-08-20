import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <p>Home page</p>
      </Container>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  height: 110vh;
  margin-top: 100px;

  .div {
    border: 1px solid red;
    position: relative;
    width: 200px;
  }
`;

export default Home;
