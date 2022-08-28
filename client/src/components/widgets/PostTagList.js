import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostTagList = ({ tags, size }) => {
  return (
    <PostTags size={size}>
      {tags?.map((tag) => (
        <Link key={tag._id} to="#">
          <span style={{ color: tag.color, opacity: 0.5 }}>#</span>
          {tag.alias}
        </Link>
      ))}
    </PostTags>
  );
};

const PostTags = styled.div`
  display: flex;
  margin-bottom: 10px;

  a {
    font-size: 13px;
    color: ${(props) => props.theme.textColor3};
    padding: 3px 5px;
    border: 1px solid transparent;
    transition: all 200ms;

    :hover {
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 6px;
      background-color: ${(props) => props.theme.borderColor}50;
    }
  }
`;

export default PostTagList;
