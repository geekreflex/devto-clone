import React from 'react';
import styled from 'styled-components';
import { ButtonClear, ButtonFill } from '../../styles/DefaultStyles';
import { DevDarkLogo } from '../../utils/images';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { toggleLoginConModal } from '../../features/actionSlice';

const LoginToContinue = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(toggleLoginConModal(false));
  };

  return (
    <Modal title="Log in to continue" close={onClose}>
      <Wrap>
        <img src={DevDarkLogo} alt="Dev Dark Logo" />
        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="btn-wrap">
          <ButtonFill>
            <Link onClick={onClose} to="enter">
              Log in
            </Link>
          </ButtonFill>
          <ButtonClear>
            <Link
              onClick={onClose}
              className="create-acct"
              to="enter?state=new-user"
            >
              Create account
            </Link>
          </ButtonClear>
        </div>
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 590px;
  flex-direction: column;

  img {
    width: 80px;
    transform: rotate(-10deg);
    margin-bottom: 50px;
  }

  p {
    font-size: 14px;
    display: block;
    margin-bottom: 20px;
    color: ${(props) => props.theme.textColor2};
  }

  .btn-wrap {
    display: flex;
    width: 100%;
    padding: 0 50px;
    flex-direction: column;

    div {
      margin-bottom: 5px;
    }

    .create-acct {
      color: ${(props) => props.theme.brandColor3};
    }

    *,
    a {
      display: block;
      width: 100%;
      :hover {
        text-decoration: none;
      }
    }
  }
`;

export default LoginToContinue;
