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
import { createPostAsync, updatePostAsync } from '../features/postSlice';
import UnsavedChanges from '../components/widgets/UnsavedChanges';
import { useLocation } from 'react-router-dom';

const NewPost = () => {
  const location = useLocation();
  const [mode, setMode] = useState('edit');
  const [pageMode, setPageMode] = useState('new-post');
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
  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    const payload = {
      title,
      content,
      tagList,
      coverImg,
    };
    setData(payload);
  }, [title, tagList, content, coverImg]);

  useEffect(() => {
    checkEditPost();
  }, []);

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
    if (pageMode === 'edit-post') {
      dispatch(updatePostAsync({ payload, id: post._id }));
    } else {
      dispatch(createPostAsync(payload));
    }
    // I need to look for a way to remove
    // the data from storage after successfully
    // posting.
    localStorage.removeItem(storeKey);
  };

  const checkEditPost = () => {
    let isEdit = location.pathname.split('/');
    if (isEdit[isEdit.length - 1] === 'edit') {
      setPageMode('edit-post');
    } else {
      setPageMode('new-post');
    }
  };

  useEffect(() => {
    if (pageMode === 'edit-post') {
      setTitle(post.title || '');
      setContent(post.content || '');
      setTagList(post.tags || []);
      setCoverImg(post.coverImg || '');
    }
  }, [pageMode]);

  return (
    <>
      <NewPostWrap>
        <NewPostHeader onMode={onMode} storeKey={storeKey} />
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
            <NewPostFooter onPublish={onPublish} pageMode={pageMode} />
          </Main>
        </Container>
        {unsavedModal && <UnsavedChanges />}
      </NewPostWrap>
    </>
  );
};

const NewPostWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondary};
  z-index: 9998;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  height: calc(100vh - 76px);

  @media (max-width: 768px) {
    margin-left: 0;
    height: calc(100vh - 57px);
  }
`;

const Inner = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  height: calc(100% - 90px);

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NewPost;
