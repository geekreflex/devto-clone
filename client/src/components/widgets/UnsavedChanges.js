import React from 'react';
import { ButtonDanger, ButtonDefault } from '../../styles/DefaultStyles';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleUnsavedModal } from '../../features/actionSlice';

const UnsavedChanges = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleUnsavedModal(false));
  };

  return (
    <Modal title="You have unsaved changes" close={close}>
      <Wrap>
        <p>
          You've made changes to your post. Do you want to navigate to leave
          this page?
        </p>
        <div className="btn-wrap">
          <ButtonDanger>
            <Link onClick={close} to="/">
              Yes, leave the page
            </Link>
          </ButtonDanger>
          <ButtonDefault>
            <button onClick={close}>No, keep editing</button>
          </ButtonDefault>
        </div>
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .btn-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .btn-wrap {
      gap: 10px;
    }
  }
`;

export default UnsavedChanges;
