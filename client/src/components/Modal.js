import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { Cancel } from '../styles/DefaultStyles';

const Modal = ({ children, close, title }) => {
  return (
    <ModalWrap>
      <ModalOverlay />
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
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
const ModalHeader = styled.div`
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default Modal;
