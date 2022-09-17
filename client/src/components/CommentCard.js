import React from 'react';
import styled from 'styled-components';
import Avatar from './excerpts/Avatar';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import moment from 'moment';

const CommentCard = ({ comment }) => {
  return (
    <Wrapper>
      <Avatar img={comment?.author?.avatar} />
      <Card>
        <div className="comment_info">
          <div className="comment-deets">
            <span className="comment_name">{comment?.author?.name}</span>
            <span className="comment_date">
              {moment(comment?.createdAt).format('MMM, D')}
            </span>
          </div>
          <button className="btn comment_action">
            <IoEllipsisHorizontalSharp />
          </button>
        </div>
        <div className="main_comment">{comment?.content}</div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;
const Card = styled.div`
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 15px 10px;
  border-radius: 6px;
  flex: 1;
  margin-bottom: 20px;

  .comment_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .comment_name {
    margin-right: 20px;
  }

  .comment_date {
    font-size: 14px;
    color: ${(props) => props.theme.textColor2};
  }

  .comment_action {
    font-size: 18px;
    :hover {
      background-color: ${(props) => props.theme.borderColor}50;
      color: ${(props) => props.theme.textColor2} !important;
      fill: currentColor;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
    padding: 10px;

    .comment_name {
      margin-right: 10px;
    }
  }
`;

export default CommentCard;
