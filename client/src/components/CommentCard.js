import React from 'react';
import styled from 'styled-components';
import Avatar from './excerpts/Avatar';

const CommentCard = () => {
  return (
    <Wrapper>
      <Avatar />
      <Card>
        <div className="comment_info">
          <div className="comment-deets">
            <span className="comment_name">Jerry Nwosu</span>
            <span className="comment_date">Sep 2</span>
          </div>
          <div className="comment_acction"></div>
        </div>
        <div className="main_comment">
          Great job right there, but don't you think you just added
          "hibernation" mode to your microvm? Looks great there!
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Card = styled.div``;

export default CommentCard;
