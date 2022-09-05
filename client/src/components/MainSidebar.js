import React from 'react';
import styled from 'styled-components';
import LeftSidebar from './LeftSidebar';

const MainSidebar = () => {
  return (
    <SidebarWrap>
      <LeftSidebar />
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div``;

export default MainSidebar;
