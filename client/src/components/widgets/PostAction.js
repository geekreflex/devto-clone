import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostAction = () => {
  return (
    <ActionWrap>
      <Link to="#">Edit</Link>
      <Link to="#">Manage</Link>
      <Link to="#">Stats</Link>
    </ActionWrap>
  );
};

const ActionWrap = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: rgba(245, 158, 11, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.2);
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
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`;

export default PostAction;
