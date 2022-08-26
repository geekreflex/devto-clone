import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log('searching...');
      navigate(`/search?q=${value}`);
    }
  };

  return (
    <SearchWrap>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
          />
        </form>
      </div>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  margin-left: 10px;

  input {
    width: 400px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 10px 15px;
    outline: none;
    font-size: 16px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.textColor1};
    font-family: 'Poppins';

    :focus {
      border-color: ${(props) => props.theme.brandColor3};
      box-shadow: 0 0 0 1px ${(props) => props.theme.brandColor3};
    }
  }
`;

export default SearchInput;
