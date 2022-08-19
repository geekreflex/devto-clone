import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotificationIcon from '../../icons/NotificationIcon';
import { Button } from '../../styles/DefaultStyles';
import { useSelector } from 'react-redux';

const NavLinks = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <NavLinksWrap>
      <Link to="#">
        <Button>Create Post</Button>
      </Link>
      <Link to="#" className="notification">
        <div className="notification-total">30</div>
        <NotificationIcon />
      </Link>
      <UserMenu>
        <div className="avatar">
          <img src={user?.avatar} alt="Profile picture" />
        </div>
      </UserMenu>
    </NavLinksWrap>
  );
};

const NavLinksWrap = styled.div`
  display: flex;
  align-items: center;

  .notification {
    margin-left: 15px;
    padding: 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;
    :hover {
      background-color: ${(props) => props.theme.brandColor}50;
      color: ${(props) => props.theme.textColor1};
    }
  }

  .notification-total {
    position: absolute;
    background-color: ${(props) => props.theme.danger};
    top: -5px;
    right: -5px;
    font-size: 12px;
    color: ${(props) => props.theme.textColor1};
    padding: 5px;
    border-radius: 5px;
    display: flex;
    box-shadow: ${(props) => props.theme.shadow1};
    line-height: 1.1;
  }
`;

const UserMenu = styled.div`
  display: flex;
  margin-left: 15px;

  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid transparent;
    cursor: pointer;
    :hover {
      border: 5px solid ${(props) => props.theme.brandColor}40;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
    }
  }
`;

export default NavLinks;
