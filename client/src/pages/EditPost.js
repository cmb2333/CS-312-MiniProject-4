import React from 'react';
import PostForm from '../components/PostForm';
import TopArtists from '../components/TopArtists';

const EditPost = () => (
  <div className="row">
    <div className="leftcolumn">
      <h1>Edit Post</h1>
      <PostForm isEdit={true} />
    </div>
    <div className="rightcolumn">
      <TopArtists />
    </div>
  </div>
);

export default EditPost;


