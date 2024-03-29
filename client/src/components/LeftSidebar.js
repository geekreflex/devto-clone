import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactIcon from '../icons/ContactIcon';
import FaqIcon from '../icons/FaqIcon';
import HomeIcon from '../icons/HomeIcon';
import ListIcon from '../icons/ListIcon';
import LoveIcon from '../icons/LoveIcon';
import PodcastIcon from '../icons/PodcastIcon';
import ReadListIcon from '../icons/ReadListIcon';
import ShopIcon from '../icons/ShopIcon';
import TagIcon from '../icons/TagIcon';
import VideoIcon from '../icons/VideoIcon';
import {
  DevRainbow,
  GuidesImg,
  CompareImg,
  CocImg,
  PrivacyImg,
  TermsImg,
} from '../utils/images';
import { ButtonClear, Button } from '../styles/DefaultStyles';

const LeftSidebar = ({ close }) => {
  const { user } = useSelector((state) => state.user);
  const { isAuth } = useSelector((state) => state.auth);
  const [readList, setReadList] = useState(0);

  useEffect(() => {
    setReadList(user?.readingList?.length || 0);
  }, [user]);
  return (
    <>
      <LeftWrap>
        {!isAuth && (
          <div className="auth__about">
            <h3>
              <Link to="/">DEV Community</Link> is a community of 898,804
              amazing developers
            </h3>
            <p>
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </p>
            <div className="btn-wrap">
              <Button>
                <Link to="enter?state=new-user">Create account</Link>
              </Button>
              <ButtonClear>
                <Link to="enter">Log in</Link>
              </ButtonClear>
            </div>
          </div>
        )}

        <section className="main-links">
          <Link to="#" onClick={close}>
            <span>
              <HomeIcon />
            </span>
            Home
          </Link>
          <Link to="#" className="readlist" onClick={close}>
            <span>
              <ReadListIcon />
            </span>
            Reading List
            {readList > 0 && <span className="total-readlist">{readList}</span>}
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <ListIcon />
            </span>
            Listings
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <PodcastIcon />
            </span>
            Podcasts
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <VideoIcon />
            </span>
            Videos
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <TagIcon />
            </span>
            Tags
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <FaqIcon />
            </span>
            FAQ
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <ShopIcon />
            </span>
            Forem Shop
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <LoveIcon />
            </span>
            Sponsors
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <img src={DevRainbow} />
            </span>
            About
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <ContactIcon />
            </span>
            Contact
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <img src={GuidesImg} />
            </span>
            Guides
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <img src={CompareImg} />
            </span>
            Software comparisons
          </Link>
        </section>

        <section>
          <h3>Other</h3>
          <Link to="#" onClick={close}>
            <span>
              <img src={CocImg} />
            </span>
            Code of Conduct
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <img src={PrivacyImg} />
            </span>
            Privacy Policy
          </Link>
          <Link to="#" onClick={close}>
            <span>
              <img src={TermsImg} />
            </span>
            Terms of use
          </Link>
        </section>
      </LeftWrap>
    </>
  );
};

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .readlist {
    .total-readlist {
      background-color: ${(props) => props.theme.borderColor};
      border-radius: 6px;
      margin-left: 10px;
      padding: 0 4px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .auth__about {
    background-color: #fafafa;
    padding: 20px;
    border-radius: 6px;
    box-shadow: ${(props) => props.theme.cardShadow};
    margin-bottom: 20px;

    h3 {
      margin-bottom: 20px;
      line-height: 1.4;
      color: ${(props) => props.theme.textColor2};

      a {
        color: ${(props) => props.theme.brandColor};
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .btn-wrap {
      display: flex;
      flex-direction: column;

      a {
        display: block;
        margin-bottom: 5px;
      }
    }
  }

  section {
    width: 100%;
    margin-bottom: 20px;

    h3 {
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 600;
    }

    a {
      width: 100%;
      display: flex;
      padding: 8px 4px;
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
        text-decoration: underline;
      }
    }
  }
`;

export default LeftSidebar;
