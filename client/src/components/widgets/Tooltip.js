import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styled from 'styled-components';

const Tooltip = ({ pos, content, children }) => {
  return (
    <TippyWrap>
      <CustomTippy
        className="tippy-wrap"
        content={content}
        placement={pos}
        arrow={false}
      >
        {children}
      </CustomTippy>
    </TippyWrap>
  );
};

const TippyWrap = styled.div``;

const CustomTippy = styled(Tippy)`
  background: ${(props) => props.theme.textColor2} !important;
  color: ${(props) => props.theme.secondary} !important;
  padding: 3px !important;
  font-size: 14px !important;
`;

export default Tooltip;
