import React, { useEffect, useState } from 'react';
import { IoEllipsisHorizontalSharp, IoLogoGithub } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonFill, Container } from '../styles/DefaultStyles';
import CakeIcon from '../icons/CakeIcon';
import moment from 'moment';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import LocationIcon from '../icons/LocationIcon';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';

const DynamicProfile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const me = useSelector((state) => state.user.user);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserProfile();
  }, [username]);

  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/${username}`);
      setUser(data.user);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <div>Seomthing went wrong...</div>;
  }

  return (
    <ProfileWrap color={user?.brandColor1}>
      <div className="backdrop"></div>
      <Container>
        <Inner>
          <Main color={user?.brandColor1}>
            <div className="img-wrap">
              <img src={user?.avatar} />
            </div>
            <div className="card-top">
              {me?.username === user?.username ? (
                <ButtonFill>
                  <button onClick={() => navigate('/settings')}>
                    Edit profile
                  </button>
                </ButtonFill>
              ) : (
                <>
                  <ButtonFill>
                    <button>Follow</button>
                  </ButtonFill>
                  <button className="btn more-btn">
                    <IoEllipsisHorizontalSharp />
                  </button>
                </>
              )}
            </div>
            <div className="card-user-data">
              <h2>{user?.name}</h2>
              <p>{user.bio || '404 bio not found'}</p>
              <div className="card-info">
                {user?.location && (
                  <div className="card-info__item">
                    <span>
                      <LocationIcon />
                    </span>
                    {user?.location}
                  </div>
                )}
                <div className="card-info__item">
                  <span>
                    <CakeIcon />
                  </span>
                  Joined on {moment(user?.createdAt).format('MMMM D, YYYY')}
                </div>
                {user?.website && (
                  <a
                    href={user?.website}
                    target="_blank"
                    className="card-info__item"
                  >
                    <span>
                      <ExternalLinkIcon />
                    </span>
                    {user?.website}
                  </a>
                )}
                {user?.githubUrl && (
                  <a
                    href={user?.githubUrl}
                    target="_blank"
                    className="card-info__item"
                    style={{ fontSize: '24px' }}
                  >
                    <IoLogoGithub />
                  </a>
                )}
              </div>
            </div>
            {(user?.education || user?.work) && (
              <div className="card-more">
                {user?.education && (
                  <div>
                    <p>Education</p>
                    {user?.education}
                  </div>
                )}
                {user?.work && (
                  <div>
                    <p>Work</p>
                    {user?.work}
                  </div>
                )}
              </div>
            )}
          </Main>
        </Inner>
      </Container>
    </ProfileWrap>
  );
};

const ProfileWrap = styled.div`
  .backdrop {
    position: absolute;
    width: 100%;
    height: 180px;
    top: 0;
    background-color: ${(props) => props.color};
    z-index: -1;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 1000px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  margin-top: 50px;
  border-radius: 6px;

  .img-wrap {
    position: absolute;
    left: 50%;
    width: 130px;
    height: 130px;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;

    img {
      width: 88%;
      border-radius: 50%;
    }
  }
  .card-top {
    display: flex;
    padding: 20px;
    justify-content: flex-end;

    .more-btn {
      font-size: 22px;
      margin-left: 10px;
      color: ${(props) => props.theme.textColor2};
      :hover {
        background-color: ${(props) => props.theme.borderColor}50;
      }
    }
  }

  .card-user-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${(props) => props.theme.borderColor}50;

    h2 {
      margin-bottom: 10px;
    }

    p {
      width: 500px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .card-info {
    display: flex;
    margin-bottom: 20px;

    a:hover,
    a:hover svg {
      color: ${(props) => props.theme.brandColor3};
      fill: ${(props) => props.theme.brandColor3};
    }

    .card-info__item {
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 14px;
      color: ${(props) => props.theme.textColor2};

      svg {
        fill: currentColor;
      }

      span {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
  }

  .card-more {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    text-align: center;

    div {
      padding: 10px;
    }

    p {
      font-size: 12px;
      color: ${(props) => props.theme.textColor2};
    }
  }
`;
export default DynamicProfile;
