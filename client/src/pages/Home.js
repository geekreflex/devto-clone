import React from 'react';
import styled from 'styled-components';
import PostList from '../components/PostList';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <Layout>
          <section className="left"></section>
          <section className="center">
            <PostList />
          </section>
          <section className="right"></section>
        </Layout>
      </Container>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  margin-top: 80px;
`;

const Layout = styled.div`
  display: flex;
  gap: 15px;

  section.left {
    width: 20%;
  }

  section.center {
    flex: 1;
  }

  section.right {
    width: 25%;
  }
`;

export default Home;
