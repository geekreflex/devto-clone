import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { Cancel } from '../styles/DefaultStyles';

const Modal = ({ children, close, title }) => {
  return (
    <ModalWrap>
      <ModalOverlay onClick={close} />
      <ModalMain>
        <ModalHeader>
          <h2>{title}</h2>
          <Cancel>
            <button onClick={close} className="btn">
              <IoCloseSharp />
            </button>
          </Cancel>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalMain>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalMain = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;
const ModalHeader = styled.div`
  position: relative;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  h2 {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 10px;

    h2 {
      font-size: 16px;
    }
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default Modal;
