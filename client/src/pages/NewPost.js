import React, { useEffect } from 'react';
import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';
import ButtonTooltip from '../components/widgets/ButtonTooltip';

const NewPost = () => {
  const autoGrow = (e) => {
    e.target.style.height = '5px';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const noNewline = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.body.classList.add('hidden');
  });

  const onUploadImg = () => {
    console.log('uploaded');
  };

  return (
    <NewPostWrap>
      <NewPostHeader />
      <PostArea>
        <Container>
          <MainArea>
            <LeftArea>
              <AddCoverImg>
                <ButtonTooltip
                  click={onUploadImg}
                  text="Add a cover image"
                  pos="bottom"
                  content={'Use a ratio of 100:42 for best results.'}
                />
              </AddCoverImg>
              <TitleTags>
                <textarea
                  onInput={autoGrow}
                  onKeyDown={noNewline}
                  id="title"
                  placeholder="New Post title here..."
                />
                <input id="tags" placeholder="Add up to 4 tags..." />
              </TitleTags>
            </LeftArea>
            <RightArea></RightArea>
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
`;

const LeftArea = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  width: 70%;
  height: 300px;
  border-radius: 6px;
  padding: 30px 60px;
`;
const RightArea = styled.div`
  width: 28%;
  border: 1px solid #222;
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

export default NewPost;
