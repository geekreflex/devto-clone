import React from 'react';
import styled from 'styled-components';

const CommentSection = () => {
  return (
    <Wrapper>
      <p>Discuss</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export default CommentSection;
