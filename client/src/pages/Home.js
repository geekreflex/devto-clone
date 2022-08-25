import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/LeftSidebar';
import PostList from '../components/PostList';
import RightSidebar from '../components/RightSidebar';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <Layout>
          <section className="left">
            <LeftSidebar />
          </section>
          <section className="center">
            <PostList />
          </section>
          <section className="right">
            <RightSidebar />
          </section>
        </Layout>
      </Container>
    </HomeWrap>
  );
};

const HomeWrap = styled.div``;

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
    width: 23%;
  }
`;

export default Home;
