import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditPost from '../components/EditPost';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import PreviewPost from '../components/PreviewPost';
import { Container } from '../styles/DefaultStyles';
import { useLocalStorage } from '../hooks/useLocalStorage';
import HelpSection from '../components/excerpts/HelpSection';
import NewPostFooter from '../components/excerpts/NewPostFooter';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAsync } from '../features/postSlice';
import UnsavedChanges from '../components/widgets/UnsavedChanges';

const NewPost = () => {
  const [mode, setMode] = useState('edit');
  const [focused, setFocused] = useState('');
  const storeKey = `editor-${window.location.href}`;
  const [data, setData] = useLocalStorage(storeKey, []);
  const [title, setTitle] = useState(data?.title || '');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState(data?.tagList || []);
  const [content, setContent] = useState(data?.content || '');
  const [coverImg, setCoverImg] = useState(data?.coverImg || '');
  const { unsavedModal } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      title,
      content,
      tagList,
      coverImg,
    };
    setData(payload);
  }, [title, tagList, content, coverImg]);

  const onMode = (mode) => {
    setMode(mode);
  };

  const onFocus = (e) => {
    setFocused(e.target.name);
  };

  const onPublish = () => {
    const payload = {
      title,
      tags: tagList.map((tag) => tag._id),
      content,
      coverImg,
    };
    console.log(payload);
    dispatch(createPostAsync(payload));
    // I need to look for a way to remove
    // the data from storage after successfully
    // posting.
    localStorage.removeItem(storeKey);
  };

  return (
    <>
      <NewPostHeader onMode={onMode} storeKey={storeKey} />
      <NewPostWrap>
        <Container>
          <Main>
            <Inner>
              <ContentArea>
                {mode === 'edit' && (
                  <EditPost
                    focused={focused}
                    onFocus={onFocus}
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    tag={tag}
                    setTag={setTag}
                    tagList={tagList}
                    setTagList={setTagList}
                    coverImg={coverImg}
                    setCoverImg={setCoverImg}
                  />
                )}
                {mode === 'preview' && (
                  <PreviewPost
                    title={title}
                    content={content}
                    tagList={tagList}
                    coverImg={coverImg}
                  />
                )}
              </ContentArea>
              <HelpArea>
                <HelpSection focused={focused} />
              </HelpArea>
            </Inner>
            <NewPostFooter onPublish={onPublish} />
          </Main>
        </Container>
      </NewPostWrap>
      {unsavedModal && <UnsavedChanges />}
    </>
  );
};

const NewPostWrap = styled.div``;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  height: calc(100vh - 76px);
`;

const Inner = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  height: calc(100% - 90px);
`;
const ContentArea = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-radius: 6px;
  overflow-y: auto;
  height: 100%;
`;
const HelpArea = styled.div`
  width: 30%;
`;

export default NewPost;
