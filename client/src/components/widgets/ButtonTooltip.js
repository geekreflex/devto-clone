import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styled from 'styled-components';

const ButtonTooltip = ({ text, click, pos, content }) => {
  return (
    <TippyWrap>
      <CustomTippy
        className="tippy-wrap"
        content={content}
        placement={pos}
        arrow={false}
      >
        <button onClick={click}>{text}</button>
      </CustomTippy>
    </TippyWrap>
  );
};

const TippyWrap = styled.div``;

const CustomTippy = styled(Tippy)`
  background: ${(props) => props.theme.textColor1} !important;
  color: #222 !important;
  padding: 3px !important;
  font-size: 14px !important;
`;

export default ButtonTooltip;
