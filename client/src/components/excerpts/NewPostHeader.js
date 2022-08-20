import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/DefaultStyles';
import Logo from './Logo';
import { IoCloseSharp } from 'react-icons/io5';

const NewPostHeader = () => {
  return (
    <HeaderWrap>
      <Container>
        <Main>
          <Logo />
          <p>Create Post</p>
          <div className="btn-wrap">
            <button className="btn">Edit</button>
            <button className="btn">Preview</button>
          </div>
        </Main>
      </Container>
      <Cancel>
        <button className="btn">
          <IoCloseSharp />
        </button>
      </Cancel>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  .btn {
    border: none;
    padding: 10px;
    font-size: 16px;
    margin-left: 5px;
    border-radius: 5px;
    color: ${(props) => props.theme.textColor1};
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: ${(props) => props.theme.brandColor}50;
      color: ${(props) => props.theme.brandColor};
    }
  }
`;
const Main = styled.div`
  height: 56px;
  display: flex;
  align-items: center;

  p {
    margin-left: 20px;
    width: 55%;
  }

  .btn-wrap {
    display: flex;
  }
`;

const Cancel = styled.div`
  position: fixed;
  right: 20px;
  top: 5px;

  button {
    font-size: 20px !important;
  }
`;

export default NewPostHeader;
