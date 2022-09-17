import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostAction = ({ post }) => {
  return (
    <ActionWrap>
      <Link to={`/${post?.author?.username}/${post.slug}/edit`}>Edit</Link>
      <Link to="#">Manage</Link>
      <Link to="#">Stats</Link>
    </ActionWrap>
  );
};

const ActionWrap = styled.div`
  background-color: ${(props) => props.theme.warning};
  border: 1px solid ${(props) => props.theme.warning};
  padding: 8px;
  border-radius: 5px;

  a {
    background-color: transparent;
    color: white;
    padding: 5px 8px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    :hover {
      background-color: ${(props) => props.theme.bgHover2};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default PostAction;
