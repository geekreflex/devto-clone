import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from './excerpts/Avatar';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import moment from 'moment';
import AuthorIcon from '../icons/AuthorIcon';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthorPreview from './widgets/AuthorPreview';

const CommentCard = ({ comment }) => {
  const [preview, setPreview] = useState(false);
  const me = useSelector((state) => state.user.user);
  return (
    <Wrapper>
      <Link to={`/${comment?.author?.username}`}>
        <Avatar img={comment?.author?.avatar} />
      </Link>
      <Card>
        <div className="comment_info">
          <div className="comment_deets">
            <span
              className="comment_name"
              onMouseEnter={() => setPreview(true)}
              onMouseLeave={() => setPreview(false)}
            >
              {comment?.author?.name}
              {me?.username === comment?.author?.username && (
                <i>
                  <AuthorIcon />
                </i>
              )}
              {preview && <AuthorPreview author={comment?.author} />}
            </span>
            <span className="comment_sep_dot"></span>
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

  .comment_deets {
    display: flex;
    align-items: center;
    position: relative;
  }

  .comment_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .comment_sep_dot {
    padding: 3px;
    background-color: ${(props) => props.theme.textColor3};
    border-radius: 50%;
    margin: 0 10px;
  }

  .comment_name {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 3px 0px;
    border-radius: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
    i {
      display: flex;
      align-items: center;
    }
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
