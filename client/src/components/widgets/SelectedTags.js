import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

const SelectedTags = ({ tagList, setTagList }) => {
  const removeTag = (alias) => {
    const tagArr = tagList.filter((tag) => tag.alias !== alias);
    setTagList(tagArr);
  };

  return (
    <SelectedTagsWrap>
      {tagList?.map((tag) => (
        <Tag key={tag._id} color={tag.color}>
          <span className="hash">#</span>
          {tag.alias}
          <span className="icon-close" onClick={() => removeTag(tag.alias)}>
            <IoCloseSharp />
          </span>
        </Tag>
      ))}
    </SelectedTagsWrap>
  );
};

const SelectedTagsWrap = styled.div`
  display: flex;
`;
const Tag = styled.div`
  border: 1px solid ${(props) => props.color}80;
  padding: 5px 10px;
  border-radius: 6px;
  margin-right: 5px;
  font-size: 14px;
  display: flex;
  background-color: ${(props) => props.color}40;
  color: ${(props) => props.theme.textColor2};
  .hash {
    color: ${(props) => props.color};
    margin-right: 5px;
  }

  .icon-close {
    font-size: 20px;
    display: flex;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.danger};
    }
  }
`;

export default SelectedTags;
