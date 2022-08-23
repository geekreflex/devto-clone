import React from 'react';
import styled from 'styled-components';
import HexIcon from '../../icons/HexIcon';
import { ButtonFill, Container } from '../../styles/DefaultStyles';

const NewPostFooter = ({ onPublish }) => {
  return (
    <FooterWrap>
      <Container>
        <FooterMain>
          <ButtonFill style={{ marginRight: '5px' }}>
            <button onClick={onPublish}>Publish</button>
          </ButtonFill>
          <button className="btn">Save draft</button>
          <button className="btn">
            <HexIcon />
          </button>
          <button className="btn revert">Revert new changes</button>
        </FooterMain>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
`;
const FooterMain = styled.div`
  margin-left: 70px;
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
