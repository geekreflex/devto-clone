import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeartIcon from '../icons/HeartIcon';
import CommentIcon from '../icons/CommentIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import PostTagList from './widgets/PostTagList';
import { useDispatch, useSelector } from 'react-redux';
import { addToBookmarkAsync, removeBookmarkAsync } from '../features/userSlice';
import BookmarkIcon2 from '../icons/BookmarkIcon2';
import AuthorPreview from './widgets/AuthorPreview';
import { toggleLoginConModal } from '../features/actionSlice';
import moment from 'moment';
import { bookmarkPost } from '../features/postSlice';

const PostCard = ({ post, index }) => {
  const [focus, setFocus] = useState(false);
  const [preview, setPreview] = useState('');
  const { user } = useSelector((state) => state.user);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onPostClick = () => {
    setFocus(false);
  };

  const onBookmark = (e) => {
    e.stopPropagation();
    if (!isAuth) {
      dispatch(toggleLoginConModal(true));
      return;
    }

    if (checkBookmark()) {
      dispatch(removeBookmarkAsync(post._id));
      dispatch(bookmarkPost({ postId: post._id, userId: user._id }));
    } else {
      dispatch(addToBookmarkAsync(post._id));
      dispatch(bookmarkPost({ postId: post._id, userId: user._id }));
    }
  };

  const onLink = (e) => {
    e.stopPropagation();
  };

  const checkBookmark = () => {
    return user?.readingList.some((rd) => rd._id === post._id);
  };

  return (
    <CardWrap
      onClick={onPostClick}
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {post.coverImg && index === 0 && (
        <CardImg>
          <img
            title={post?.title}
            src={post?.coverImg}
            referrerPolicy="no-referrer"
            alt="Some random picture placeholder"
          />
        </CardImg>
      )}
      <CardBody>
        <UserInfo>
          <Link to={`/${post.author.username}`} className="avatar">
            <img src={post.author.avatar} alt={post.author.name} />
          </Link>
          <div className="author-time">
            <span
              className="author-name"
              onMouseEnter={() => setPreview(true)}
              onMouseLeave={() => setPreview(false)}
            >
              {post.author.name}
              {preview && <AuthorPreview author={post?.author} />}
            </span>
            <span className="date-time">
              {moment(post?.createdAt).format('MMM D')} (
              {moment(post?.createdAt).fromNow()})
            </span>
          </div>
        </UserInfo>
        <PostInfo>
          <Link
            to={`/${post.author.username}/${post.slug}`}
            className={index === 0 ? 'big-post-title post-title' : 'post-title'}
          >
            <h1>{post.title}</h1>
          </Link>

          <PostTagList tags={post.tags} />
          <PostDetails>
            <div className="details">
              <Link to="#" onClick={onLink}>
                <span>
                  <HeartIcon />
                </span>
                <span>0</span>
                <span>Reactions</span>
              </Link>
              <Link to="#" onClick={onLink}>
                <span>
                  <CommentIcon />
                </span>
                <span>{post?.comments?.length}</span>
                <span>
                  {post?.comments?.length > 1 ? 'comments' : 'comment'}
                </span>
              </Link>
            </div>
            <div className="details">
              <span className="duration">3 min read</span>
              <button
                className={checkBookmark() ? 'bookmarked btn' : 'btn'}
                onClick={onBookmark}
                title="Save to reading list"
              >
                {checkBookmark() ? <BookmarkIcon2 /> : <BookmarkIcon />}
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
  box-shadow: ${(props) =>
    props.focus
      ? `0 0 0 2px ${props.theme.brandColor3}`
      : props.theme.cardShadow};

  @media (max-width: 768px) {
    border-radius: 0;
  }
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

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;
const CardBody = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 6px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
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
    position: relative;

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

  @media (max-width: 768px) {
    padding-left: 0;
  }

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

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bookmarked {
    background-color: ${(props) => props.theme.borderColor};
  }

  .details {
    display: flex;
    align-items: center;
    margin-left: -6px;

    .duration {
      font-size: 12px;
      margin-right: 10px;
      color: ${(props) => props.theme.textColor2};
    }

    @media (max-width: 768px) {
      span:last-child {
        display: none;
      }
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
