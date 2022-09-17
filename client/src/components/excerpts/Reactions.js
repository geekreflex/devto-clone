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

const Reactions = ({ post }) => {
  const [visible, setVisible] = useState(false);
  let twitterUrl = encodeURIComponent(
    `"${post?.title}" by @${post?.author?.username} #DEVCommunity #DEVCommunityClone https://clone-devto.herokuapp.com/${post?.author?.username}/${post?.slug}`
  );
  return (
    <ReactionWrap>
      <Tooltip content="Like" pos="bottom">
        <div className="reaction like">
          <span className="reaction-icon ">
            <HeartIconLg />
          </span>
          <span className="reaction-total">0</span>
        </div>
      </Tooltip>
      <Tooltip content="Unicorn" pos="bottom">
        <div className="reaction unicorn">
          <span className="reaction-icon">
            <UnicornIcon />
          </span>
          <span className="reaction-total">0</span>
        </div>
      </Tooltip>
      <Tooltip content="Save" pos="bottom">
        <div className="reaction save">
          <span className="reaction-icon">
            <BookmarkIconLg />
          </span>
          <span className="reaction-total">0</span>
        </div>
      </Tooltip>
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
  align-items: flex-end;
  margin-bottom: 20px;
  position: fixed;
  z-index: 99998;

  .option-wrap {
    position: relative;
  }

  .like:hover {
    .reaction-icon {
      color: rgb(238, 68, 68);
      background-color: rgba(239, 68, 68, 0.1);
    }
  }

  .unicorn:hover {
    .reaction-icon {
      color: rgb(5, 150, 105);
      background-color: rgba(5, 150, 105, 0.1);
    }
  }

  .save:hover {
    .reaction-icon {
      color: rgb(99, 102, 241);
      background-color: rgba(99, 102, 241, 0.1);
    }
  }

  .more-option:hover {
    .reaction-icon {
      background-color: ${(props) => props.theme.borderColor}50;
    }
  }

  .reaction {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.textColor2};
    fill: currentColor;

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

    .reaction {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    .reaction-icon {
      align-items: center;
      justify-content: center;
      margin-bottom: 0 !important;
      margin-right: 5px;
    }
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
