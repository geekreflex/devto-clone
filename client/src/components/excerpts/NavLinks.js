import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotificationIcon from '../../icons/NotificationIcon';
import { Button } from '../../styles/DefaultStyles';
import { useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

const NavLinks = () => {
  const { user } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);

  return (
    <NavLinksWrap>
      <Button>
        <Link to="new">Create Post</Link>
      </Button>
      <Link to="#" className="notification">
        <div className="notification-total">30</div>
        <NotificationIcon />
      </Link>
      <UserMenu>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <button className="avatar" onClick={() => setVisible(!visible)}>
            <span>
              <img
                src={user?.avatar}
                referrerPolicy="no-referrer"
                alt={user?.name}
              />
            </span>
          </button>
        </OutsideClickHandler>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Dropdown visible={visible}>
            <ul>
              <li id="user-info">
                <Link to="#">
                  <span>{user?.name}</span>
                  <span id="username">@{user?.username}</span>
                </Link>
              </li>
              <li>
                <Link to="#">Dashboard</Link>
              </li>
              <li>
                <Link to="#">Create Post</Link>
              </li>
              <li>
                <Link to="#">Reading list</Link>
              </li>
              <li>
                <Link to="#">Settings</Link>
              </li>
              <li>
                <Link to="signout_confirm">Sign Out</Link>
              </li>
            </ul>
          </Dropdown>
        </OutsideClickHandler>
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
    color: #ffffff;
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
  position: relative;

  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;

    :focus {
      background-color: ${(props) => props.theme.borderColor}50;
    }

    :hover {
      background-color: ${(props) => props.theme.brandColor}50;
    }

    span {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #333;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 48px;
  background-color: ${(props) => props.theme.primary};
  width: 280px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  display: ${(props) => (props.visible ? 'block' : 'none')};

  ul,
  li {
    list-style: none;
  }

  a {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    color: ${(props) => props.theme.textColor2};

    :hover {
      background-color: ${(props) => props.theme.brandColor};
      border-radius: 5px;
      text-decoration: underline;
    }
  }

  #user-info {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding-bottom: 8px;
    margin-bottom: 8px;
  }

  #user-info #username {
    font-size: 14px;
  }

  li:last-child {
    border-top: 1px solid ${(props) => props.theme.borderColor};
    padding-top: 8px;
    margin-top: 8px;
  }
`;

export default NavLinks;
