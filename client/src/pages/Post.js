import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Reactions from '../components/excerpts/Reactions';
import { ButtonFill, Container } from '../styles/DefaultStyles';
import { BASE_URL } from '../utils/constants';
import moment from 'moment';
import PostTagList from '../components/widgets/PostTagList';
import Markdown from '../components/widgets/Markdown';
import CommentSection from '../components/CommentSection';

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
            <CommentSection />
          </PostMain>
          <PostRight>
            <PostAuthorCard className="fixed">
              <div
                className="backdrop"
                style={{ backgroundColor: post?.author.brandColor1 }}
              ></div>
              <div className="author-main-info">
                <div className="author-info_top">
                  <Link className="avatar" to={`/${post?.author?.username}`}>
                    <img src={post?.author?.avatar} alt={post?.author?.name} />
                  </Link>
                  <Link
                    to={`/${post?.author?.username}`}
                    className="author-name"
                  >
                    {post?.author?.name}
                  </Link>
                </div>
                <div className="author-info_bottom">
                  <ButtonFill>
                    <button>Follow</button>
                  </ButtonFill>
                  <p className="author-bio">{post?.author?.bio}</p>
                  <div>
                    <p>Email</p>
                    <a href={`mailto:${post?.author?.email}`}>
                      {post?.author?.email}
                    </a>
                  </div>
                  {post?.author?.work && (
                    <div>
                      <p>Work</p>
                      {post?.author?.work}
                    </div>
                  )}
                  <div>
                    <p>Joined</p>
                    {moment(post?.author?.createdAt).format('MMMM D, YYYY')}
                  </div>
                </div>
              </div>
            </PostAuthorCard>
          </PostRight>
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
  position: relative;
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

  .main-content {
    margin: initial;
    * {
      all: revert;
    }
  }
`;

const PostAuthorCard = styled.div`
  width: 350px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-radius: 8px;
  overflow: hidden;
  bottom: 0;

  .backdrop {
    height: 40px;
    width: 100%;
  }

  .author-main-info {
    padding: 5px 15px 15px 15px;

    .author-info_top {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .author-name {
        font-weight: 600;
        margin-left: 10px;
        font-size: 18px;
        color: ${(props) => props.theme.textColor1};
      }

      .avatar {
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 50%;
        margin-top: -25px;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }

    .author-info_bottom {
      .author-bio {
        margin-bottom: 20px;
      }
      div {
        margin-bottom: 15px;
        line-height: 1.2;
        color: ${(props) => props.theme.textColor2};

        p {
          font-size: 12px;
          font-weight: 600;
          color: ${(props) => props.theme.textColor3};
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        a {
          color: ${(props) => props.theme.brandColor3};
        }
      }
    }
  }
`;

export default Post;
