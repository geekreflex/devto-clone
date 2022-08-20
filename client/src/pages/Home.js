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
  height: 1500px;
`;

export default Home;
