import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AccountIcon from '../icons/AccountIcon';
import BillingIcon from '../icons/BillingIcon';
import CustomizeIcon from '../icons/CustomizeIcon';
import ExtensionsIcon from '../icons/ExtensionsIcon';
import NotiIcon from '../icons/NotiIcon';
import OrganizationIcon from '../icons/OrganizationIcon';
import PorfileIcon from '../icons/PorfileIcon';

const Settings = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <SettingsWrap>
      <Inner>
        <Main>
          <h1>
            Settings for{' '}
            <Link to={`/${user?.username}`}>@{user?.username}</Link>
          </h1>

          <Layout>
            <Sidenav>
              <ul>
                <li>
                  <Link to="profile">
                    <span>
                      <PorfileIcon />
                    </span>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="customization">
                    <span>
                      <CustomizeIcon />
                    </span>
                    Customization
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>
                      <NotiIcon />
                    </span>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>
                      <AccountIcon />
                    </span>
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>
                      <BillingIcon />
                    </span>
                    Billing
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>
                      <OrganizationIcon />
                    </span>
                    Organization
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>
                      <ExtensionsIcon />
                    </span>
                    Extensions
                  </Link>
                </li>
              </ul>
            </Sidenav>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Main>
      </Inner>
    </SettingsWrap>
  );
};

const SettingsWrap = styled.div``;
const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Main = styled.div`
  h1 {
    font-weight: 600;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;
const Sidenav = styled.div`
  width: 25%;

  ul,
  li {
    list-style: none;
  }

  a {
    width: 100%;
    display: flex;
    padding: 8px 6px;
    color: ${(props) => props.theme.textColor2};

    span {
      display: flex;
      margin-right: 10px;

      img {
        width: 24px;
      }
    }

    :hover {
      background-color: ${(props) => props.theme.brandColor}30;
      color: ${(props) => props.theme.brandColor3};
      border-radius: 5px;
    }
  }
`;
const Content = styled.div`
  flex: 1;
`;

export default Settings;
