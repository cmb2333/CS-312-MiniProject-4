import React from 'react';
import PostForm from '../components/PostForm';
import TopArtists from '../components/TopArtists';

const CreatePost = () => (
  <div className="row">
    <div className="leftcolumn">
      <h1>Create a New Post</h1>
      <PostForm isEdit={false} />
    </div>
    <div className="rightcolumn">
      <TopArtists /> {/* Top Artists */}
    </div>
  </div>
);

export default CreatePost;

