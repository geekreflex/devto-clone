import styled from 'styled-components';
import NewPostHeader from '../components/excerpts/NewPostHeader';
import { Container } from '../styles/DefaultStyles';

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

  return (
    <NewPostWrap>
      <NewPostHeader />
      <PostArea>
        <Container>
          <MainArea>
            <LeftArea>
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
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 99998;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.secondary};

  header {
    height: 50px;
  }
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
    min-height: 60px;
    max-height: 300px;
    white-space: pre-wrap;
    overflow: hidden;
  }

  #tags {
    font-size: 16px;
  }
`;

export default NewPost;
