import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useEffect } from 'react';
import PostTagList from './widgets/PostTagList';

const PreviewPost = ({ coverImg, title, tagList, content }) => {
  const markOutputRef = useRef();

  useEffect(() => {
    let newContent = DOMPurify.sanitize(marked.parse(content));
    markOutputRef.current.innerHTML = newContent;
  }, [content]);

  return (
    <PreviewWrap>
      <CoverImg>
        <img src={coverImg} alt={title} />
      </CoverImg>
      <PreviewBody>
        <h1>{title}</h1>
        <PostTagList size="16" tags={tagList} />
        <div className="content" ref={markOutputRef} />
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