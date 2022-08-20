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
    padding: 10px;
  }
`;
const Main = styled.div`
  height: 56px;
  display: flex;
  align-items: center;

  p {
    margin-left: 20px;
    width: 53%;
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
