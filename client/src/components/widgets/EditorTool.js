import React, { useEffect, useState } from 'react';
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
  const [splitNum, setSplitNum] = useState(11);

  const windowSize = () => {
    if (window.innerWidth < 1200) {
      setSplitNum(8);
    } else {
      setSplitNum(11);
    }

    if (window.innerWidth < 768) {
      setSplitNum(6);
    } else {
      setSplitNum(8);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      windowSize();
    });
    windowSize();
  }, []);

  const toolList = [
    { content: 'Bold CTRL + B', icon: <BoldIcon /> },
    { content: 'Italic CTRL + I', icon: <ItalicIcon /> },
    { content: 'Link CTRL + K', icon: <LinkIcon /> },
    { content: 'Ordered list', icon: <OrderedIcon /> },
    { content: 'Unordered list', icon: <UnorderedIcon /> },
    { content: 'Heading', icon: <HeadingIcon /> },
    { content: 'Quote', icon: <QuoteIcon /> },
    { content: 'Code', icon: <CodeIcon /> },
    { content: 'Code block', icon: <CodeBlockIcon /> },
    { content: 'Embed CTRL + SHIFT + K', icon: <EmbedIcon /> },
    { content: 'Upload image', icon: <UploadImgIcon /> },
    { content: 'Underline CTRL + U', icon: <UnderlineIcon /> },
    { content: 'Strikethrough CTRL + SHIFT + X', icon: <StrikeThroughIcon /> },
    { content: 'Line divider', icon: <LineDividerIcon /> },
    { content: 'Help', icon: <HelpIcon /> },
  ];

  return (
    <ToolWrap>
      <ToolLeft>
        {toolList.slice(0, splitNum).map((tool, index) => (
          <Tooltip key={index} content={tool.content} pos="bottom">
            <button className="btn">{tool.icon}</button>
          </Tooltip>
        ))}
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
            {toolList.slice(splitNum, toolList.length).map((tool, index) => (
              <Tooltip key={index} content={tool.content} pos="bottom">
                <button className="btn">{tool.icon}</button>
              </Tooltip>
            ))}
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
  height: 56px;
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
