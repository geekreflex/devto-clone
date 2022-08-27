import Tippy from '@tippyjs/react';
import React from 'react';
import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';

const ColorPicker = ({ color, setColor }) => {
  return (
    <PickerWrap>
      <Custom
        placement="bottom-start"
        trigger="click"
        arrow={false}
        interactive={true}
        content={<HexColorPicker color={color} onChange={setColor} />}
      >
        <button
          type="button"
          style={{ backgroundColor: color }}
          className="color-block"
        ></button>
      </Custom>
    </PickerWrap>
  );
};

const PickerWrap = styled.div`
  .color-block {
    width: 35px;
    height: 34px;
    border-radius: 6px;
    position: absolute;
    top: 59px;
    left: 5px;
    z-index: 9;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.borderColor};
    outline: none;
  }
`;

const Custom = styled(Tippy)`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
`;

export default ColorPicker;
