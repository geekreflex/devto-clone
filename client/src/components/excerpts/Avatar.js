import React from 'react';
import styled from 'styled-components';

const Avatar = ({ size, img }) => {
  return (
    <AvatarWrap size={size}>
      {img && <img src={img} referrerPolicy="no-referrer" alt="Default User" />}
    </AvatarWrap>
  );
};

const AvatarWrap = styled.div`
  width: ${(props) => props.size + 'px' || '35px'};
  height: ${(props) => props.size + 'px' || '35px;'};
  border-radius: 50%;
  background-color: ${(props) => props.theme.brandColor};

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default Avatar;
