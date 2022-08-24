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
      <div>
        <h1>{title}</h1>
        <PostTagList tags={tagList} />
        <div ref={markOutputRef} />
      </div>
    </PreviewWrap>
  );
};

const PreviewWrap = styled.div`
  padding: 20px 50px;
`;

export default PreviewPost;
