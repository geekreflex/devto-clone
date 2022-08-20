import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';
import Tooltip from '../components/widgets/Tooltip';
import { autoGrow, noNewline } from '../utils/inputActions';
import { help } from '../data/help';
import EditorTool from '../components/widgets/EditorTool';

const NewPost = () => {
  const [focused, setFocused] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const [content, setContent] = useState('');
  const [coverImg, setCoverImg] = useState('');

  const contentRef = useRef();

  const onUploadImg = () => {
    console.log('uploaded');
  };

  const onFocus = (e) => {
    setFocused(e.target.name);
  };

  function insertHtml() {
    // let html = '\n\n```\n\n```';
    // let val = content + html;
    // setContent(val);

    contentRef.current.value = `<a>${contentRef.current.getSelection()}</a>`;
  }

  return (
    <NewPostWrap>
      <NewPostHeader />
      <PostArea>
        <Container>
          <MainArea>
            <LeftArea>
              <Pad>
                <AddCoverImg>
                  <Tooltip
                    pos="bottom"
                    content={'Use a ratio of 100:42 for best results.'}
                  >
                    <button>Add a cover image</button>
                  </Tooltip>
                </AddCoverImg>
                <TitleTags>
                  <textarea
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={onFocus}
                    onInput={autoGrow}
                    onKeyDown={noNewline}
                    id="title"
                    placeholder="New Post title here..."
                  />
                  <input
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    name="tags"
                    onFocus={onFocus}
                    id="tags"
                    placeholder="Add up to 4 tags..."
                  />
                </TitleTags>
              </Pad>

              <Tools>
                <EditorTool />
              </Tools>
              <Pad>
                <TextField>
                  <textarea
                    ref={contentRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                    onFocus={onFocus}
                    placeholder="Write your post content here..."
                  />
                </TextField>
              </Pad>
            </LeftArea>
            <RightArea visible={focused}>
              <section className={focused + ' active'}>
                <h3>{help[focused]?.header}</h3>
                <ul>
                  {help[focused]?.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            </RightArea>
          </MainArea>
        </Container>
      </PostArea>
    </NewPostWrap>
  );
};

const NewPostWrap = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 99998;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.secondary};
`;

const PostArea = styled.div``;

const MainArea = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftArea = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  width: 68%;
  border-radius: 6px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Pad = styled.div`
  padding: 30px 60px;
`;

const RightArea = styled.div`
  width: 30%;

  section {
    color: ${(props) => props.theme.textColor2};
    visibility: hidden;
    opacity: 0;
    transition: all 200ms;
    margin-top: 100px;

    ul {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
    }

    ul li {
      margin-left: 1em;
      font-size: 14px;
      margin-bottom: 5px;
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

const TitleTags = styled.div`
  display: flex;
  flex-direction: column;

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

  #title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
    height: 60px;
    white-space: pre-wrap;
    overflow: hidden;
  }

  #tags {
    font-size: 16px;
  }
`;

const AddCoverImg = styled.div`
  margin-bottom: 20px;
  position: relative;
  button {
    padding: 8px 14px;
    border: 2px solid ${(props) => props.theme.borderColor};
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme.textColor2};
    font-size: 16px;
    border-radius: 6px;
  }
`;

const Tools = styled.div`
  background-color: ${(props) => props.theme.shade1};
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 50px;
`;

const TextField = styled.div`
  textarea {
    width: 100%;
    min-height: 200px;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    color: ${(props) => props.theme.textColor1};
  }
`;

export default NewPost;
