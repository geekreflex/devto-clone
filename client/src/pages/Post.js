import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Reactions from '../components/excerpts/Reactions';
import { Container } from '../styles/DefaultStyles';
import { BASE_URL } from '../utils/constants';
import moment from 'moment';
import PostTagList from '../components/widgets/PostTagList';
import Markdown from '../components/widgets/Markdown';

const Post = () => {
  const { username, postSlug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost();
  }, [username, postSlug]);

  const getPost = async () => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        `${BASE_URL}/posts/${username}/${postSlug}`,
        config
      );

      console.log(data);

      setPost(data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostWrap>
      <Container>
        <PostLayout>
          <PostReaction>
            <Reactions />
          </PostReaction>
          <PostMain>
            {post?.coverImg && (
              <PostImg>
                <img src={post?.coverImg} />
              </PostImg>
            )}
            <PostContent>
              <section className="info-sect">
                <Link to={`/${post?.author?.username}`} className="avatar">
                  <img src={post?.author?.avatar} />
                </Link>
                <div className="details">
                  <Link to={`/${post?.author?.username}`}>
                    {post?.author?.name}
                  </Link>
                  <p>Posted on {moment(post?.createdAt).format('MMM, D')}</p>
                </div>
              </section>
              <section className="title-tags">
                <h1>{post?.title}</h1>
                <PostTagList tags={post?.tags} />
              </section>
              <section className="main-content">
                <Markdown content={post?.content} />
              </section>
            </PostContent>
          </PostMain>
          <PostRight></PostRight>
        </PostLayout>
      </Container>
    </PostWrap>
  );
};

const PostWrap = styled.div``;
const PostLayout = styled.div`
  display: flex;
  gap: 15px;
`;
const PostMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.cardShadow};
`;
const PostReaction = styled.div`
  width: 70px;
  padding-top: 30px;
`;
const PostRight = styled.div`
  width: 350px;
`;
const PostImg = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const PostContent = styled.div`
  padding: 30px 50px;
  .info-sect {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .details {
      a {
        color: ${(props) => props.theme.textColor1};
        font-weight: 600;

        :hover {
          color: ${(props) => props.theme.brandColor3};
        }
      }
    }

    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 10px;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    p {
      line-height: 1;
      font-size: 12px;
      color: ${(props) => props.theme.textColor3};
    }
  }

  .title-tags {
    margin-bottom: 30px;
    h1 {
      font-size: 50px;
      font-weight: 600;
      line-height: 1.3;
    }
  }

  /* .main-content {
    margin: initial;
    * {
      all: revert;
    }
  } */
`;

export default Post;
