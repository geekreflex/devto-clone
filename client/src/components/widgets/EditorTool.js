import React, { useState } from 'react';
import styled from 'styled-components';
import BoldIcon from '../../icons/BoldIcon';
import CodeBlockIcon from '../../icons/CodeBlockIcon';
import CodeIcon from '../../icons/CodeIcon';
import EmbedIcon from '../../icons/EmbedIcon';
import HeadingIcon from '../../icons/HeadingIcon';
import HelpIcon from '../../icons/HelpIcon';
import ItalicIcon from '../../icons/ItalicIcon';
import LineDividerIcon from '../../icons/LineDividerIcon';
import LinkIcon from '../../icons/LinkIcon';
import MoreIcon from '../../icons/MoreIcon';
import OrderedIcon from '../../icons/OrderedIcon';
import QuoteIcon from '../../icons/QuoteIcon';
import StrikeThroughIcon from '../../icons/StrikeThroughIcon';
import UnderlineIcon from '../../icons/UnderlineIcon';
import UnorderedIcon from '../../icons/UnorderedIcon';
import UploadImgIcon from '../../icons/UploadImgIcon';
import Tooltip from './Tooltip';
import OutsideClickHandler from 'react-outside-click-handler';

const EditorTool = () => {
  const [more, setMore] = useState(false);

  return (
    <ToolWrap>
      <ToolLeft>
        <Tooltip content="Bold CTRL + B" pos="bottom">
          <button className="btn">
            <BoldIcon />
          </button>
        </Tooltip>
        <Tooltip content="Italic CTRL + I" pos="bottom">
          <button className="btn">
            <ItalicIcon />
          </button>
        </Tooltip>
        <Tooltip content="Link CTRL + K" pos="bottom">
          <button className="btn">
            <LinkIcon />
          </button>
        </Tooltip>
        <Tooltip content="Ordered list" pos="bottom">
          <button className="btn">
            <OrderedIcon />
          </button>
        </Tooltip>
        <Tooltip content="Unordered list" pos="bottom">
          <button className="btn">
            <UnorderedIcon />
          </button>
        </Tooltip>
        <Tooltip content="Heading" pos="bottom">
          <button className="btn">
            <HeadingIcon />
          </button>
        </Tooltip>
        <Tooltip content="Quote" pos="bottom">
          <button className="btn">
            <QuoteIcon />
          </button>
        </Tooltip>
        <Tooltip content="Code" pos="bottom">
          <button className="btn">
            <CodeIcon />
          </button>
        </Tooltip>
        <Tooltip content="Code block" pos="bottom">
          <button className="btn">
            <CodeBlockIcon />
          </button>
        </Tooltip>
        <Tooltip content="Embed CTRL + SHIFT + K" pos="bottom">
          <button className="btn">
            <EmbedIcon />
          </button>
        </Tooltip>
        <Tooltip content="Upload image" pos="bottom">
          <button className="btn">
            <UploadImgIcon />
          </button>
        </Tooltip>
      </ToolLeft>
      <ToolRight>
        <OutsideClickHandler onOutsideClick={() => setMore(false)}>
          <button
            className={more ? 'active btn' : 'btn'}
            onClick={() => setMore(true)}
          >
            <MoreIcon />
          </button>
        </OutsideClickHandler>
        <OutsideClickHandler onOutsideClick={() => setMore(false)}>
          <MoreOptions visible={more}>
            <Tooltip content="Underline CTRL + U" pos="bottom">
              <button className="btn">
                <UnderlineIcon />
              </button>
            </Tooltip>
            <Tooltip content="Strikethrough CTRL + SHIFT + X" pos="bottom">
              <button className="btn">
                <StrikeThroughIcon />
              </button>
            </Tooltip>
            <Tooltip content="Line divider" pos="bottom">
              <button className="btn">
                <LineDividerIcon />
              </button>
            </Tooltip>
            <button className="btn">
              <HelpIcon />
            </button>
          </MoreOptions>
        </OutsideClickHandler>
      </ToolRight>
    </ToolWrap>
  );
};

const ToolWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
const ToolLeft = styled.div`
  display: flex;
`;
const ToolRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;

  .active {
    background-color: ${(props) => props.theme.borderColor};
  }
`;

const MoreOptions = styled.div`
  position: absolute;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  background-color: ${(props) => props.theme.primary};
  top: 50px;
  right: 0;
  box-shadow: ${(props) => props.theme.shadow1};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  padding: 8px;
`;

export default EditorTool;
