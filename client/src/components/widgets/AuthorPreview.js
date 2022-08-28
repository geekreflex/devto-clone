import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonFill } from '../../styles/DefaultStyles';

const AuthorPreview = ({ author }) => {
  return (
    <AuthorPreviewWrap color={author?.brandColor1}>
      <div className="backdrop"></div>
      <Main>
        <Link to={`/${author.username}`} className="prev-avatar">
          <img src={author.avatar} alt={author.name} />
        </Link>
        <Link to={`/${author.username}`} className="prev-name">
          <h3>{author.name}</h3>
        </Link>
        <ButtonFill>
          <button style={{ padding: '6px 10px' }}>Follow</button>
        </ButtonFill>
        <p className="bio">{author?.bio}</p>
        <div className="prev-deets">
          <div>
            <p>Email</p>
            <a href={`mailto:${author.email}`}>{author?.email}</a>
          </div>
          {author?.work && (
            <div>
              <p>Work</p>
              {author?.work}
            </div>
          )}
          <div>
            <p>Joined</p>
            {moment(author?.createdAt).format('MMMM D, YYYY')}
          </div>
        </div>
      </Main>
    </AuthorPreviewWrap>
  );
};

const AuthorPreviewWrap = styled.div`
  position: absolute;
  z-index: 9;
  background-color: ${(props) => props.theme.primary};
  top: 27px;
  min-width: 280px;
  max-width: 350px;
  box-shadow: ${(props) => props.theme.shadow1};
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;

  .backdrop {
    background-color: ${(props) => props.color};
    width: 100%;
    height: 30px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

const Main = styled.div`
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 5px 10px;
  /* border-bottom-left-radius: 6px; */
  /* border-bottom-right-radius: 6px; */
  position: relative;

  .bio {
    padding: 10px 0;
  }

  .prev-avatar {
    position: absolute;
    top: -25px;

    img {
      width: 45px;
      border-radius: 50%;
    }
  }

  .prev-name {
    margin-left: 50px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${(props) => props.theme.textColor2};

    :hover {
      color: ${(props) => props.theme.brandColor3};
    }

    h3 {
      font-weight: 600;
      font-size: 18px;
    }
  }

  .prev-deets {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;
      line-height: 1.2;
      color: ${(props) => props.theme.textColor1};

      p {
        font-size: 12px;
        font-weight: 600;
        color: ${(props) => props.theme.textColor2};
        margin-bottom: 5px;
        text-transform: uppercase;
      }

      a {
        color: ${(props) => props.theme.brandColor3};
      }
    }

    span {
      color: ${(props) => props.theme.textColor2};
    }
  }
`;

export default AuthorPreview;
