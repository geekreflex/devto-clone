import React from 'react';
import styled from 'styled-components';

const Avatar = ({ size, img }) => {
  return (
    <AvatarWrap size={size}>
      <img src={img} referrerPolicy="no-referrer" alt="Default User" />
    </AvatarWrap>
  );
};

const AvatarWrap = styled.div`
  width: ${(props) => (props.size ? `${props.size}px` : '35px')};
  height: ${(props) => (props.size ? `${props.size}px` : '35px')};
  border-radius: 50%;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default Avatar;
