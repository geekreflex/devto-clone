import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/LeftSidebar';
import MainSidebar from '../components/MainSidebar';
import PostList from '../components/PostList';
import RightSidebar from '../components/RightSidebar';
import { Container } from '../styles/DefaultStyles';

const Home = () => {
  return (
    <>
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
      <MainSidebar />
    </>
  );
};

const HomeWrap = styled.div``;

const Layout = styled.div`
  display: flex;
  gap: 15px;

  section.left {
    width: 250px;
  }

  section.center {
    flex: 1;
    width: 100%;
  }

  section.right {
    width: 25%;
  }

  @media (max-width: 900px) {
    section.right {
      display: none;
    }
  }

  @media (max-width: 768px) {
    section.left {
      display: none;
    }
  }
`;

export default Home;
