import React from 'react';
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

const LeftSidebar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <LeftWrap>
      <section className="main-links">
        <Link to="#">
          <span>
            <HomeIcon />
          </span>
          Home
        </Link>
        <Link to="#" className="readlist">
          <span>
            <ReadListIcon />
          </span>
          Reading List
          {user?.readingList.length > 0 && (
            <span className="total-readlist">{user?.readingList?.length}</span>
          )}
        </Link>
        <Link to="#">
          <span>
            <ListIcon />
          </span>
          Listings
        </Link>
        <Link to="#">
          <span>
            <PodcastIcon />
          </span>
          Podcasts
        </Link>
        <Link to="#">
          <span>
            <VideoIcon />
          </span>
          Videos
        </Link>
        <Link to="#">
          <span>
            <TagIcon />
          </span>
          Tags
        </Link>
        <Link to="#">
          <span>
            <FaqIcon />
          </span>
          FAQ
        </Link>
        <Link to="#">
          <span>
            <ShopIcon />
          </span>
          Forem Shop
        </Link>
        <Link to="#">
          <span>
            <LoveIcon />
          </span>
          Sponsors
        </Link>
        <Link to="#">
          <span>
            <img src={DevRainbow} />
          </span>
          About
        </Link>
        <Link to="#">
          <span>
            <ContactIcon />
          </span>
          Contact
        </Link>
        <Link to="#">
          <span>
            <img src={GuidesImg} />
          </span>
          Guides
        </Link>
        <Link to="#">
          <span>
            <img src={CompareImg} />
          </span>
          Software comparisons
        </Link>
      </section>

      <section>
        <h3>Other</h3>
        <Link to="#">
          <span>
            <img src={CocImg} />
          </span>
          Code of Conduct
        </Link>
        <Link to="#">
          <span>
            <img src={PrivacyImg} />
          </span>
          Privacy Policy
        </Link>
        <Link to="#">
          <span>
            <img src={TermsImg} />
          </span>
          Terms of use
        </Link>
      </section>
    </LeftWrap>
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

  section {
    width: 100%;
    margin-bottom: 20px;

    h3 {
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 600;
    }
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
      border-radius: 5px;
      text-decoration: underline;
    }
  }
`;

export default LeftSidebar;
