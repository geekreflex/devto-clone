import React from 'react';
import styled from 'styled-components';
import UnicornIcon from '../../icons/UnicornIcon';
import BookmarkIconLg from '../../icons/BookmarkIconLg';
import HeartIconLg from '../../icons/HeartIconLg';
import MoreIcon2 from '../../icons/MoreIcon2';
import Tooltip from '../widgets/Tooltip';

const Reactions = () => {
  return (
    <ReactionWrap>
      <Tooltip content="Like" pos="bottom">
        <div className="reaction like">
          <span className="reaction-icon ">
            <HeartIconLg />
          </span>
          <span className="reaction-total">2</span>
        </div>
      </Tooltip>
      <Tooltip content="Unicorn" pos="bottom">
        <div className="reaction unicorn">
          <span className="reaction-icon">
            <UnicornIcon />
          </span>
          <span className="reaction-total">10</span>
        </div>
      </Tooltip>
      <Tooltip content="Save" pos="bottom">
        <div className="reaction save">
          <span className="reaction-icon">
            <BookmarkIconLg />
          </span>
          <span className="reaction-total">3</span>
        </div>
      </Tooltip>
      <div className="reaction">
        <div className="reaction more-option">
          <span className="reaction-icon">
            <MoreIcon2 />
          </span>
        </div>
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
`;

export default Reactions;
