import React from 'react';
import styled from 'styled-components';
import Markdown from './widgets/Markdown';
import PostTagList from './widgets/PostTagList';

const PreviewPost = ({ coverImg, title, tagList, content }) => {
  return (
    <PreviewWrap>
      {coverImg && (
        <CoverImg>
          <img src={coverImg} alt={title} />
        </CoverImg>
      )}
      <PreviewBody>
        <h1>{title}</h1>
        <PostTagList size="16" tags={tagList} />
        <Markdown content={content} />
      </PreviewBody>
    </PreviewWrap>
  );
};

const PreviewWrap = styled.div`
  overflow-y: auto;
`;

const CoverImg = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  img {
    width: 100%;
  }
`;

const PreviewBody = styled.div`
  padding: 20px 50px;

  * {
    margin: inherit;
  }

  h1 {
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .content {
    margin-top: 30px;
  }
`;

export default PreviewPost;
