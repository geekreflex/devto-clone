import React from 'react';
import styled from 'styled-components';
import { Cancel, Container } from '../../styles/DefaultStyles';
import Logo from './Logo';
import { IoCloseSharp } from 'react-icons/io5';
import { toggleUnsavedModal } from '../../features/actionSlice';
import { useDispatch } from 'react-redux';

const NewPostHeader = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(toggleUnsavedModal(true));
  };

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
        <button className="btn" onClick={onClose}>
          <IoCloseSharp />
        </button>
      </Cancel>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;

  .btn {
    padding: 10px;
  }
`;

const Main = styled.div`
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

export default NewPostHeader;
