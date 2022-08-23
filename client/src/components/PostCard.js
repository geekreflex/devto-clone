import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeartIcon from '../icons/HeartIcon';
import CommentIcon from '../icons/CommentIcon';
import BookmarkIcon from '../icons/BookmarkIcon';

const PostCard = ({ post, index }) => {
  const onPostClick = () => {
    console.log(post.slug);
  };

  return (
    <CardWrap onClick={onPostClick}>
      {index === 0 && (
        <CardImg>
          <img
            src={post.coverImg || 'https://source.unsplash.com/random'}
            alt="Some random picture placeholder"
          />
        </CardImg>
      )}
      <CardBody>
        <UserInfo>
          <div className="avatar">
            <img src={post.author.avatar} alt={post.author.name} />
          </div>
          <div className="author-time">
            <span className="author-name">{post.author.name}</span>
            <span className="date-time">Aug 22 (16 hours ago)</span>
          </div>
        </UserInfo>
        <PostInfo>
          <Link
            to="#"
            className={index === 0 ? 'big-post-title post-title' : 'post-title'}
          >
            <h1>{post.title}</h1>
          </Link>
          <PostTags>
            {post.tags.map((tag) => (
              <Link key={tag._id} to="#">
                #{tag.alias}
              </Link>
            ))}
          </PostTags>
          <PostDetails>
            <div className="details">
              <Link to="#">
                <span>
                  <HeartIcon />
                </span>
                <span>11</span>
                Reactions
              </Link>
              <Link to="#">
                <span>
                  <CommentIcon />
                </span>
                <span>2</span>
                Comments
              </Link>
            </div>
            <div className="details">
              <span className="duration">3 min read</span>
              <button className="btn">
                <BookmarkIcon />
              </button>
            </div>
          </PostDetails>
        </PostInfo>
      </CardBody>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const CardImg = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  img {
    width: 100%;
  }
`;
const CardBody = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
  overflow: hidden;
`;

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .author-time {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    align-items: flex-start;
    justify-content: flex-start;

    .author-name {
      font-size: 14px;
      color: ${(props) => props.theme.textColor2};
      padding: 3px 2px;

      :hover {
        border-radius: 6px;
        background-color: ${(props) => props.theme.borderColor}50;
      }
    }

    .date-time {
      font-size: 12px;
      color: ${(props) => props.theme.textColor3};
    }
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  .post-title {
    color: ${(props) => props.theme.textColor1};
    :hover {
      color: ${(props) => props.theme.brandColor3};
    }

    h1 {
      font-weight: 600;
      font-size: 22px;
    }
  }

  .big-post-title {
    h1 {
      font-size: 30px !important;
    }
  }
`;

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

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .details {
    display: flex;
    align-items: center;
    margin-left: -6px;

    .duration {
      font-size: 12px;
      margin-right: 10px;
      color: ${(props) => props.theme.textColor2};
    }

    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 4px 6px;
      border-radius: 6px;
      color: ${(props) => props.theme.textColor2};

      :hover {
        background-color: ${(props) => props.theme.borderColor}50;
      }

      svg {
        fill: currentColor;
      }

      span {
        display: flex;
        align-items: center;
        margin-right: 3px;
      }
    }
  }
`;

export default PostCard;
