import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrap>
      <p>Home</p>
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
