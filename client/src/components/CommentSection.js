import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ButtonDefault,
  ButtonFill,
  ButtonGrey,
  InputWrap,
} from '../styles/DefaultStyles';
import { BASE_URL } from '../utils/constants';
import CommentCard from './CommentCard';
import Avatar from './excerpts/Avatar';
import EditorTool from './widgets/EditorTool';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsAsync, postCommentAsync } from '../features/commentSlice';

const CommentSection = ({ post }) => {
  const [comment, setComment] = useState('');
  const { comments } = useSelector((state) => state.comment);
  const [focus, setFocus] = useState(false);
  const [focusBorder, setFocusBorder] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post?._id) {
      dispatch(getCommentsAsync({ postId: post._id }));
    }
  }, [post]);

  const onComment = async (e) => {
    e.preventDefault();
    const payload = {
      content: comment,
      postId: post._id,
    };

    dispatch(postCommentAsync(payload));
    setComment('');
  };
  return (
    <Wrapper>
      <TopSect>
        <h2>
          Discussion
          <span>({comments?.length})</span>
        </h2>
        <div className="btn-wrap">
          <ButtonGrey>
            <button>Subscribe</button>
          </ButtonGrey>
        </div>
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
                <button
                  onClick={onComment}
                  type="button"
                  className={comment ? '' : 'disabled'}
                >
                  Submit
                </button>
              </ButtonFill>
              <ButtonDefault>
                <button type="button" className={comment ? '' : 'disabled'}>
                  Preview
                </button>
              </ButtonDefault>
            </ButtonWrap>
          )}
        </InputSect>
      </CommentField>
      <CommentList>
        {comments?.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  border-top: 1px solid ${(props) => props.theme.borderColor};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TopSect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 10px;
  h2 {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    span {
      margin-left: 10px;
    }
  }
`;

const CommentField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 10px;
  }
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
  overflow: ${(props) => (props.focus ? '' : 'hidden')};

  textarea {
    height: ${(props) => (props.focus ? '100px' : '')};
    border: none;
    border-radius: 0;
    border-bottom: ${(props) =>
      props.focus ? `1px solid ${props.theme.borderColor}` : ''};
    box-shadow: none !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    :focus {
      border-color: ${(props) => props.theme.borderColor};
      box-shadow: none;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const CommentList = styled.div``;

export default CommentSection;
