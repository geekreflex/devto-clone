import React from 'react';
import styled from 'styled-components';
import { Cancel, Container } from '../../styles/DefaultStyles';
import Logo from './Logo';
import { IoCloseSharp } from 'react-icons/io5';
import { toggleUnsavedModal } from '../../features/actionSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewPostHeader = ({ onMode, storeKey }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => {
    const item = localStorage.getItem(storeKey);
    if (item) {
      dispatch(toggleUnsavedModal(true));
    } else {
      navigate(-1);
    }
  };

  return (
    <HeaderWrap>
      <Container>
        <Main>
          <div className="title-logo">
            <div>
              <Logo />
            </div>
            <p>Create Post</p>
          </div>
          <div className="btn-wrap">
            <button className="btn" onClick={() => onMode('edit')}>
              Edit
            </button>
            <button className="btn" onClick={() => onMode('preview')}>
              Preview
            </button>
          </div>
        </Main>
      </Container>
      <Cancel style={{ position: 'absolute' }}>
        <button className="btn" onClick={onClose}>
          <IoCloseSharp />
        </button>
      </Cancel>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  z-index: 999;
  background-color: ${(props) => props.theme.secondary};

  .btn {
    padding: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;

  .title-logo {
    display: flex;
    align-items: center;

    a {
      margin-right: 20px;
    }
  }

  .btn-wrap {
    display: flex;
  }

  @media (max-width: 768px) {
    .title-logo div {
      display: none;
    }
  }
`;

export default NewPostHeader;
