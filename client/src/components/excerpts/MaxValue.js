import React from 'react';
import styled from 'styled-components';

const MaxValue = ({ max, value }) => {
  return (
    <MaxWrap>
      <span>{value?.length}</span>/<span>{max}</span>
    </MaxWrap>
  );
};

const MaxWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  font-size: 14px;
`;

export default MaxValue;
