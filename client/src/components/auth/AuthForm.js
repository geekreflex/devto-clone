import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../../styles/DefaultStyles';

const AuthForm = ({ loginState }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      remember,
    };

    console.log(payload);
  };

  return (
    <FormWrap onSubmit={onSubmit}>
      <InputGroup>
        {loginState === 'new-user' && (
          <InputWrap>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrap>
        )}
        <InputWrap>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrap>
        <InputWrap>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrap>
        <InputWrapCheck>
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remeber me
          </label>
        </InputWrapCheck>
      </InputGroup>
      <ButtonFill>
        <button style={{ height: '42px' }}>Continue</button>
      </ButtonFill>
    </FormWrap>
  );
};

const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InputWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 10px 15px;
    outline: none;
    font-size: 16px;

    :focus {
      border-color: ${(props) => props.theme.brandColor};
      box-shadow: 0 0 0 1px ${(props) => props.theme.brandColor};
    }
  }
`;
const FormWrap = styled.form`
  width: 100%;
`;

const InputWrapCheck = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.borderColor}50;
  }

  input {
    width: 30px;
    font-size: 50px;
    cursor: pointer;
  }
`;

export default AuthForm;
