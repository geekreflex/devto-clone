import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostCard from './PostCard';

const PostList = () => {
  const { posts } = useSelector((state) => state.post);

  return (
    <PostListWrap>
      <Nav>
        <Link to="#" className="active-link">
          Relevant
        </Link>
        <Link to="#">Latest</Link>
        <Link to="#">Top</Link>
      </Nav>
      <PostMain>
        {posts?.map((post, index) => (
          <PostCard key={post._id} post={post} index={index} />
        ))}
      </PostMain>
    </PostListWrap>
  );
};

const PostListWrap = styled.div``;

const PostMain = styled.div``;

const Nav = styled.div`
  display: flex;
  margin-bottom: 10px;

  a {
    padding: 8px 16px;
    color: ${(props) => props.theme.textColor2};
    :hover {
      color: ${(props) => props.theme.brandColor3};
    }
  }

  .active-link {
    font-weight: 600;
    color: ${(props) => props.theme.textColor1};
  }
`;

export default PostList;
