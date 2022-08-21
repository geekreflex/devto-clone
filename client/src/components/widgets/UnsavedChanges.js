import React from 'react';
import { ButtonDanger, ButtonDefault } from '../../styles/DefaultStyles';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnsavedChanges = () => {
  return (
    <Modal title="You have unsaved changes">
      <Wrap>
        <p>
          You've made changes to your post. Do you want to navigate to leave
          this page?
        </p>
        <div className="btn-wrap">
          <ButtonDanger style={{ marginRight: '20px' }}>
            <Link to="/">Yes, leave the page</Link>
          </ButtonDanger>
          <ButtonDefault>
            <button>No, keep editing</button>
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

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .btn-wrap {
    display: flex;
    align-items: center;
  }
`;

export default UnsavedChanges;
