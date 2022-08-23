import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';
import { autoGrow, noNewline } from '../utils/inputActions';
import { help } from '../data/help';
import EditorTool from '../components/widgets/EditorTool';
import UnsavedChanges from '../components/widgets/UnsavedChanges';
import { useDispatch, useSelector } from 'react-redux';
import NewPostFooter from '../components/excerpts/NewPostFooter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TagList from '../components/widgets/TagList';
import SelectedTags from '../components/widgets/SelectedTags';
import { createPostAsync } from '../features/postSlice';
import UploadCover from '../components/widgets/UploadCover';

const NewPost = () => {
  const storeKey = `editor-${window.location.href}`;
  const [data, setData] = useLocalStorage(storeKey, []);
  const [focused, setFocused] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [title, setTitle] = useState(data?.title || '');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState(data?.tagList || []);
  const [content, setContent] = useState(data?.content || '');
  const [coverImg, setCoverImg] = useState(data?.coverImg || '');

  const { unsavedModal } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  useEffect(() => {
    saveData();
  }, [title, tagList, content, coverImg]);

  const saveData = () => {
    const payload = {
      title,
      content,
      tagList,
      coverImg,
    };
    setData(payload);
  };

  const contentRef = useRef();

  const onFocus = (e) => {
    setFocused(e.target.name);
  };

  const onInputFocus = (e) => {
    setFocused(e.target.name);
    setInputFocus(true);
  };

  const onPublish = () => {
    const payload = {
      title,
      tags: tagList.map((tag) => tag._id),
      content,
      coverImg,
    };
    dispatch(createPostAsync(payload));
    // localStorage.removeItem(storeKey)
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
                    <UploadCover
                      coverImg={coverImg}
                      setCoverImg={setCoverImg}
                    />
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
                    <TagField style={{ position: 'relative' }}>
                      <SelectedTags tagList={tagList} setTagList={setTagList} />
                      <input
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        name="tags"
                        onFocus={onInputFocus}
                        onBlur={() => setInputFocus(false)}
                        id="tags"
                        placeholder="Add up to 4 tags..."
                      />
                      {focused === 'tags' && (
                        <TagList tagList={tagList} setTagList={setTagList} />
                      )}
                    </TagField>
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
        <NewPostFooter onPublish={onPublish} />
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
  height: calc(100vh - 90px - 100px);
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

const TitleTags = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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

const TagField = styled.div`
  position: relative;
  display: flex;
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
