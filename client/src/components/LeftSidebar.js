import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CompareIcon from '../icons/CompareIcon';
import ContactIcon from '../icons/ContactIcon';
import DevtoIcon from '../icons/DevtoIcon';
import FaqIcon from '../icons/FaqIcon';
import GuidesIcon from '../icons/GuidesIcon';
import HeartIcon from '../icons/HeartIcon';
import HomeIcon from '../icons/HomeIcon';
import ListIcon from '../icons/ListIcon';
import LoveIcon from '../icons/LoveIcon';
import PodcastIcon from '../icons/PodcastIcon';
import ReadListIcon from '../icons/ReadListIcon';
import ShopIcon from '../icons/ShopIcon';
import TagIcon from '../icons/TagIcon';
import VideoIcon from '../icons/VideoIcon';

const LeftSidebar = () => {
  return (
    <LeftWrap>
      <section className="main-links">
        <Link to="#">
          <span>
            <HomeIcon />
          </span>
          Home
        </Link>
        <Link to="#">
          <span>
            <ReadListIcon />
          </span>
          Reading List
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
            <DevtoIcon />
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
            <GuidesIcon />
          </span>
          Guides
        </Link>
        <Link to="#">
          <span>
            <CompareIcon />
          </span>
          Software comparisons
        </Link>
      </section>

      <section>
        <h3>Other</h3>
        <Link to="#">
          <span>
            <HeartIcon />
          </span>
          Code of Conduct
        </Link>
        <Link to="#">
          <span>
            <HeartIcon />
          </span>
          Privacy Policy
        </Link>
        <Link to="#">
          <span>
            <HeartIcon />
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
    padding: 8px 16px;
    color: ${(props) => props.theme.textColor2};

    span {
      display: flex;
      margin-right: 10px;
    }

    :hover {
      background-color: ${(props) => props.theme.brandColor}50;
      border-radius: 5px;
      text-decoration: underline;
    }
  }
`;

export default LeftSidebar;
