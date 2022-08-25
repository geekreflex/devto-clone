import React from 'react';
import GoogleLoginAuth from '../components/auth/GoogleAuthLogin';
import GithubLoginAuth from '../components/auth/GithubAuthLogin';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import { Link, useSearchParams } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

const Enter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get('state');

  return (
    <EnterWrap>
      <Container>
        <Inner>
          <Main>
            <Wlc>
              <h1>Welcome to DEV Community</h1>
              <p>
                <Link to="#">DEV Community</Link> is a community of 893,678
                amazing developers
              </p>
            </Wlc>
            <AuthBtns>
              <GoogleLoginAuth />
              <GithubLoginAuth />
            </AuthBtns>
            <div className="reg-hr">
              {state === 'new-user' ? (
                <span>
                  Already have and acount? <Link to="#">Login</Link>
                </span>
              ) : (
                <span>Have a password? Continue with your email address</span>
              )}
            </div>
            <AuthForm loginState={state} />
          </Main>
        </Inner>
      </Container>
    </EnterWrap>
  );
};

const EnterWrap = styled.div``;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 640px;
  background-color: ${(props) => props.theme.primary};
  padding: 50px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;

  .reg-hr {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    ::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.borderColor};
      position: absolute;
    }

    span {
      position: relative;
      padding: 5px 10px;
      background-color: ${(props) => props.theme.primary};
      z-index: 9;
      font-size: 14px;
    }
  }
`;

const Wlc = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;

const AuthBtns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;

  button {
    width: 100%;
    padding: 14px 20px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Enter;
