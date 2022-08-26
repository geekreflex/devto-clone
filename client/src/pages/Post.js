import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { username, postSlug } = useParams();
  return (
    <div>
      This is your post {username} - {postSlug}
    </div>
  );
};

export default Post;
