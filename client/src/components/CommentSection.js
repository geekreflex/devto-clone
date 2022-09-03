import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ButtonDefault,
  ButtonFill,
  ButtonGrey,
  InputWrap,
} from '../styles/DefaultStyles';
import CommentCard from './CommentCard';
import Avatar from './excerpts/Avatar';
import EditorTool from './widgets/EditorTool';

const CommentSection = ({ post }) => {
  const [comment, setComment] = useState('');
  const [focus, setFocus] = useState(false);
  const [focusBorder, setFocusBorder] = useState(false);
  return (
    <Wrapper>
      <TopSect>
        <h2>
          Discussion
          <span>(10)</span>
        </h2>
        <ButtonGrey>
          <button>Subscribe</button>
        </ButtonGrey>
      </TopSect>
      <CommentField>
        <Avatar img={post?.author?.avatar} size={40} />
        <InputSect>
          <InputWrapCustom focus={focus} focusBorder={focusBorder}>
            <textarea
              placeholder="Add to the discussion"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onFocus={() => {
                setFocus(true);
                setFocusBorder(true);
              }}
              onBlur={() => setFocusBorder(false)}
            />
            {focus && <EditorTool />}
          </InputWrapCustom>
          {focus && (
            <ButtonWrap>
              <ButtonFill>
                <button className={comment ? '' : 'disabled'}>Submit</button>
              </ButtonFill>
              <ButtonDefault>
                <button className={comment ? '' : 'disabled'}>Preview</button>
              </ButtonDefault>
            </ButtonWrap>
          )}
        </InputSect>
      </CommentField>
      <CommentCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const TopSect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    span {
      margin-left: 10px;
    }
  }
`;

const CommentField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const InputSect = styled.div`
  flex: 1;
`;

const InputWrapCustom = styled(InputWrap)`
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.focusBorder ? `0 0 0 2px ${props.theme.brandColor3}` : ''};

  textarea {
    height: ${(props) => (props.focus ? '100px' : '')};
    border: none;
    border-radius: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: ${(props) =>
      props.focus ? `1px solid ${props.theme.borderColor}` : ''};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export default CommentSection;
