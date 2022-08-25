import React, { useEffect } from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonFill, Container } from '../styles/DefaultStyles';

const Profile = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.user);

  const getUserProfile = () => {};

  return (
    <ProfileWrap>
      <div className="backdrop"></div>
      <Container>
        <Inner>
          <Main>
            <div className="img-wrap">
              <img src={user?.avatar} />
            </div>
            <div className="card-top">
              <ButtonFill>
                <button>Follow</button>
              </ButtonFill>
              <button className="btn more-btn">
                <IoEllipsisHorizontalSharp />
              </button>
            </div>
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
    background-color: navy;
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
    background-color: navy;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;

    img {
      width: 85%;
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
`;
export default Profile;
