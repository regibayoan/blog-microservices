import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <div className='container'>
      <h1>Sample News Feed</h1>
      <br />
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h2>News Feed</h2>
      <PostList />
    </div>
  );
};
