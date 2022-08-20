import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';
import ButtonTooltip from '../components/widgets/ButtonTooltip';
import { autoGrow, noNewline } from '../utils/inputActions';
import { help } from '../data/help';

const NewPost = () => {
  const [focused, setFocused] = useState('');

  useEffect(() => {
    document.body.classList.add('hidden');
  });

  const onUploadImg = () => {
    console.log('uploaded');
  };

  const onFocus = (e) => {
    setFocused(e.target.name);
  };

  const onBlur = (e) => {
    setFocused('');
  };

  return (
    <NewPostWrap>
      <NewPostHeader />
      <PostArea>
        <Container>
          <MainArea>
            <LeftArea>
              <Pad>
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
                    name="title"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onInput={autoGrow}
                    onKeyDown={noNewline}
                    id="title"
                    placeholder="New Post title here..."
                  />
                  <input
                    name="tags"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    id="tags"
                    placeholder="Add up to 4 tags..."
                  />
                </TitleTags>
              </Pad>

              <Tools>
                <p>tools</p>
              </Tools>
              <Pad>
                <TextField>
                  <textarea
                    name="content"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="Write your post content here..."
                  />
                </TextField>
              </Pad>
            </LeftArea>
            <RightArea visible={focused}>
              <section className={focused + ' active'}>
                <h3>{help[focused]?.header}</h3>
                <ul>
                  {help[focused]?.items.map((item) => (
                    <li>{item}</li>
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
  width: 70%;
  border-radius: 6px;
`;

const Pad = styled.div`
  padding: 30px 60px;
`;

const RightArea = styled.div`
  width: 28%;

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
  padding: 0 60px;
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
