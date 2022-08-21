import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';
import Tooltip from '../components/widgets/Tooltip';
import { autoGrow, noNewline } from '../utils/inputActions';
import { help } from '../data/help';
import EditorTool from '../components/widgets/EditorTool';
import UnsavedChanges from '../components/widgets/UnsavedChanges';
import { useSelector } from 'react-redux';
import NewPostFooter from '../components/excerpts/NewPostFooter';
import { useLocalStorage } from '../hooks/useLocalStorage';

const NewPost = () => {
  const storeKey = `editor-${window.location.href}`;
  const [data, setData] = useLocalStorage(storeKey, []);
  const [focused, setFocused] = useState('');
  const [title, setTitle] = useState(data?.title || '');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const [content, setContent] = useState(data?.content || '');
  const [coverImg, setCoverImg] = useState('');

  const { unsavedModal } = useSelector((state) => state.action);

  useEffect(() => {
    saveData();
  }, [title, tag, content, coverImg]);

  const saveData = () => {
    const payload = {
      title,
      content,
    };
    setData(payload);
  };

  const contentRef = useRef();

  const onFocus = (e) => {
    setFocused(e.target.name);
  };

  return (
    <>
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
                      placeholder="New post title here..."
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
                <Pad className="content-pad">
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
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </section>
              </RightArea>
            </MainArea>
          </Container>
        </PostArea>
        <NewPostFooter />
      </NewPostWrap>
      {unsavedModal && <UnsavedChanges />}
    </>
  );
};

const NewPostWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 99998;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.secondary};
`;

const PostArea = styled.div`
  flex: 1;
  display: flex;
`;

const MainArea = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

const LeftArea = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  width: 68%;
  border-radius: 6px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .content-pad {
    flex: 1;
    display: flex;
  }
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
      font-size: 15px;
      margin-bottom: 5px;
      line-height: 1.2;
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
  display: flex;
  flex: 1;
  textarea {
    width: 100%;
    min-height: 200px;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    color: ${(props) => props.theme.textColor1};
    flex: 1;
  }
`;

export default NewPost;
