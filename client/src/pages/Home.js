import React from 'react';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="row">
      <PostList />
      <Sidebar />
    </div>
  );
}

export default Home;
