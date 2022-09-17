import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HexIcon from '../../icons/HexIcon';
import { ButtonFill } from '../../styles/DefaultStyles';

const NewPostFooter = ({ onPublish }) => {
  const { status } = useSelector((state) => state.post);
  return (
    <FooterWrap>
      <FooterMain>
        <ButtonFill style={{ marginRight: '5px' }}>
          <button onClick={onPublish}>
            {status === 'loading' ? 'Publishing...' : 'Publish'}
          </button>
        </ButtonFill>
        <button className="btn">Save</button>
        <button className="btn">
          <HexIcon />
        </button>
        <button className="btn revert">Revert</button>
      </FooterMain>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  height: 90px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 60px;
  }
`;
const FooterMain = styled.div`
  display: flex;
  align-items: center;

  .revert {
    font-size: 14px;
  }

  button,
  a {
    text-decoration: none;
    /* margin-right: 20px; */

    :hover {
      text-decoration: none;
    }
  }
`;

export default NewPostFooter;
