import React, { useState } from 'react';
import styled from 'styled-components';
import UnicornIcon from '../../icons/UnicornIcon';
import BookmarkIconLg from '../../icons/BookmarkIconLg';
import HeartIconLg from '../../icons/HeartIconLg';
import MoreIcon2 from '../../icons/MoreIcon2';
import Tooltip from '../widgets/Tooltip';
import { Link } from 'react-router-dom';
import CopyIcon from '../../icons/CopyIcon';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux';

const Reactions = ({ post }) => {
  const [visible, setVisible] = useState(false);
  const me = useSelector((state) => state.user.user);
  let twitterUrl = encodeURIComponent(
    `"${post?.title}" by @${post?.author?.username} #DEVCommunity #DEVCommunityClone https://clone-devto.herokuapp.com/${post?.author?.username}/${post?.slug}`
  );

  const reactionList = [
    {
      name: 'Like',
      icon: <HeartIconLg />,
      total: 0,
      color1: 'rgb(238, 68, 68)',
      color2: 'rgba(239, 68, 68, 0.1)',
    },
    {
      name: 'Unicorn',
      icon: <UnicornIcon />,
      total: 0,
      color1: 'rgb(5, 150, 105)',
      color2: 'rgba(5, 150, 105, 0.1)',
    },
    {
      name: 'Save',
      icon: <BookmarkIconLg />,
      total: post?.savedList?.length,
      color1: 'rgb(99, 102, 241)',
      color2: 'rgba(99, 102, 241, 0.1)',
      active: me?.readingList?.some((rd) => rd._id === post?._id),
    },
  ];

  return (
    <ReactionWrap>
      {reactionList.map((reaction) => (
        <Reaction
          active={reaction.active}
          color1={reaction.color1}
          color2={reaction.color2}
        >
          <span className="reaction-icon">{reaction.icon}</span>
          <span className="reaction-total">{reaction.total}</span>
        </Reaction>
      ))}
      <div className="option-wrap">
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <div className="reaction" onClick={() => setVisible(!visible)}>
            <div className="reaction-icon more-option">
              <span className="reaction-icon">
                <MoreIcon2 />
              </span>
            </div>
          </div>
          {visible && (
            <MoreOption>
              <div className="copy-link">
                <span>Copy link</span>
                <span>
                  <CopyIcon />
                </span>
              </div>
              <a
                target="_blank"
                rel="noopener"
                href={`https://twitter.com/intent/tweet?text=${twitterUrl}`}
              >
                Share to Twitter
              </a>
              <Link to="#">Share to LinkedIn</Link>
              <Link to="#">Share to Reddit</Link>
              <Link to="#">Share to Hacker News</Link>
              <Link to="#">Share to Facebook</Link>
              <Link to="#">Report Abuse</Link>
            </MoreOption>
          )}
        </OutsideClickHandler>
      </div>
    </ReactionWrap>
  );
};

const ReactionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: fixed;
  z-index: 99998;
  align-items: center;

  .option-wrap {
    position: relative;
  }

  .more-option:hover {
    .reaction-icon {
      background-color: ${(props) => props.theme.borderColor}50;
    }
  }

  .reaction-icon {
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .reaction-total {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    position: relative;
    background-color: ${(props) => props.theme.secondary};
    flex-direction: row;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: space-around;
    height: 56px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    .reaction-icon {
      align-items: center;
      justify-content: center;
      margin-bottom: 0 !important;
      margin-right: 5px;
    }
  }
`;

const Reaction = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor2};
  fill: currentColor;

  :hover {
    .reaction-icon {
      color: ${(props) => props.color1};
      background-color: ${(props) => props.color2};
      border: 2px solid transparent;
    }
  }

  .reaction-icon {
    color: ${(props) => props.active && props.color1};
    background-color: ${(props) => props.active && props.color2};
    border: 2px solid
      ${(props) => (props.active ? props.color1 : 'transparent')};
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

const MoreOption = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shadow1};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  width: 250px;
  position: absolute;
  left: 60px;
  top: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 99998;

  .copy-link {
    color: ${(props) => props.theme.textColor1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.brandColor3};
    }

    span {
      font-weight: 600;
      font-size: 18px;
    }
  }

  a {
    color: ${(props) => props.theme.textColor2};
    padding: 8px;
    display: block;
    border-radius: 6px;

    :hover {
      background-color: ${(props) => props.theme.brandColor}50;
      color: ${(props) => props.theme.brandColor3};
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    display: block;
    bottom: 60px;
    right: 20px;
    left: unset;
    top: unset;
  }

  @media (max-width: 600px) {
    width: 98%;
    right: 1%;
  }
`;

export default Reactions;
