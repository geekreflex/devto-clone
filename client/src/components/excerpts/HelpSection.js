import React from 'react';
import styled from 'styled-components';
import { help } from '../../data/help';

const HelpSection = ({ focused }) => {
  return (
    <HelpWrap>
      <section className={focused + ' active'}>
        <h3>{help[focused]?.header}</h3>
        <ul>
          {help[focused]?.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </section>
    </HelpWrap>
  );
};

const HelpWrap = styled.div`
  section {
    visibility: hidden;
    opacity: 0;
    transition: all 200ms;
    margin-top: 100px;

    h3 {
      font-size: 18px;
      color: ${(props) => props.theme.textColor1};
    }

    ul {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      color: ${(props) => props.theme.textColor2};
    }

    ul li {
      margin-left: 1em;
      font-size: 15px;
      margin-bottom: 8px;
      line-height: 1.5;
      a {
        color: ${(props) => props.theme.brandColor3};
      }
    }
  }

  section.active {
    visibility: visible;
    opacity: 1;
  }

  section.active.tags {
    margin-top: 150px;
  }

  section.active.tags {
    margin-top: 200px;
  }

  section.active.content {
    margin-top: 250px;
  }
`;

export default HelpSection;
