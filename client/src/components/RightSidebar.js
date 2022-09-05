import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DevSurveyImg } from '../utils/images';

const RightSidebar = () => {
  return (
    <RightWrap>
      <section>
        <img src={DevSurveyImg} alt="DEV Survey" />
        <h3>Tell us your thoughts about DEV!</h3>
        <Link to="#">→ Take the DEV Satisfaction Survey</Link>
      </section>
      <section>
        <p>Hello</p>
      </section>
    </RightWrap>
  );
};

const RightWrap = styled.div`
  section {
    background-color: ${(props) => props.theme.primary};
    margin-bottom: 20px;
    padding: 20px 12px;
    border-radius: 6px;
    box-shadow: ${(props) => props.theme.cardShadow};

    img {
      width: 100%;
      border-radius: 6px;
      margin-bottom: 30px;
    }

    h3 {
      margin-bottom: 20px;
    }

    a {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default RightSidebar;
