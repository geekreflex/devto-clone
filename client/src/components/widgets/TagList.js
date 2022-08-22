import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { truncate } from '../../utils/inputActions';

const TagList = ({ tagList, setTagList }) => {
  const { tags } = useSelector((state) => state.post);
  const [filteredTags, setFilteredTags] = useState([]);

  const onTagClick = (tag) => {
    setTagList([...tagList, tag]);
  };

  useEffect(() => {
    let filteredArr = tags?.filter((tag) => !tagList.includes(tag));
    setFilteredTags(filteredArr);
  }, [tagList, tags]);

  return (
    <TagListWrap hide={tagList.length === 4}>
      <TagHeader>
        <h3>Top Tags</h3>
      </TagHeader>
      <Tags>
        {filteredTags.map((tag) => {
          return (
            <Tag key={tag.alias} onClick={() => onTagClick(tag)}>
              <p id="alias">
                <span style={{ color: tag.color }}>#</span>
                {tag.alias}
              </p>
              <p id="desc">{truncate(tag.description, 190)}</p>
            </Tag>
          );
        })}
      </Tags>
    </TagListWrap>
  );
};

const TagListWrap = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: ${(props) => props.theme.primary};
  padding: 5px;
  z-index: 999;
  width: 100%;
  display: ${(props) => (props.hide ? 'none' : 'block')};
  overflow-y: auto;
  height: 500px;
`;
const Tags = styled.div``;
const Tag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.shade1};
  }

  #alias {
    font-size: 16px;
  }

  #desc {
    font-size: 13px;
  }
`;
const TagHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;

export default TagList;
