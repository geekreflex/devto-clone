import React from 'react';
import styled from 'styled-components';

const RightSidebar = () => {
  return (
    <RightWrap>
      <section>
        <h3>Coming soon!</h3>
      </section>
    </RightWrap>
  );
};

const RightWrap = styled.div`
  section {
    background-color: ${(props) => props.theme.primary};
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 6px;
  }
`;

export default RightSidebar;
