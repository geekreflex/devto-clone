import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { autoGrow, noNewline } from '../utils/inputActions';
import EditorTool from './widgets/EditorTool';
import SelectedTags from './widgets/SelectedTags';
import TagList from './widgets/TagList';
import UploadCover from './widgets/UploadCover';

const EditPost = ({
  title,
  setTitle,
  content,
  setContent,
  coverImg,
  setCoverImg,
  tag,
  setTag,
  tagList,
  setTagList,
  onFocus,
  focused,
}) => {
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (titleRef.current && contentRef.current) {
      grow(titleRef.current);
      grow(contentRef.current);
    }
  }, [titleRef, contentRef]);

  const grow = (elem) => {
    elem.style.minHeight = '5px';
    elem.style.minHeight = elem.scrollHeight + 'px';
  };

  return (
    <EditorPostWrap>
      <TopSection>
        <UploadCover coverImg={coverImg} setCoverImg={setCoverImg} />
        <TitleField>
          <textarea
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={onFocus}
            onInput={autoGrow}
            onKeyDown={noNewline}
            id="title"
            placeholder="New post title here..."
            ref={titleRef}
          />
        </TitleField>
        <TagField style={{ position: 'relative' }}>
          <SelectedTags tagList={tagList} setTagList={setTagList} />
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            name="tags"
            onFocus={onFocus}
            id="tags"
            placeholder="Add up to 4 tags..."
          />
          {focused === 'tags' && (
            <TagList tagList={tagList} setTagList={setTagList} />
          )}
        </TagField>
      </TopSection>
      <EditorTool />
      <ContentField>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          onFocus={onFocus}
          placeholder="Write your post content here..."
          onInput={autoGrow}
          spellCheck={false}
          ref={contentRef}
        />
      </ContentField>
    </EditorPostWrap>
  );
};

const EditorPostWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 50px;

  input,
  textarea {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.textColor1};
    resize: none;
    width: 100%;
    font-family: 'Poppins';
  }
`;

const TitleField = styled.div`
  textarea {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
    height: 60px;
    white-space: pre-wrap;
    overflow: hidden;
  }
`;
const TagField = styled.div`
  position: relative;
  display: flex;
`;
const ContentField = styled.div`
  flex: 1;
  padding: 20px 50px;
  display: flex;

  textarea {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    color: ${(props) => props.theme.textColor1};
    white-space: pre-wrap;
    overflow: hidden;
    height: auto;
  }
`;

export default EditPost;
