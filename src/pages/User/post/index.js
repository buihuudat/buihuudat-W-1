import React from 'react';
import CreatePost from './createPost';
import Posts from './post';

import './style.scss';

function Post() {
  return (
    <>
      <CreatePost />
      <Posts />
    </>
  )
}

export default Post;