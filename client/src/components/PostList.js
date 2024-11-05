import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`).then(() => {
      setPosts(posts.filter(post => post.id !== id));
    });
  };

  return (
    <div className="leftcolumn">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>Posted by {post.name} on {new Date(post.postedOn).toDateString()}</p>
          <p>{post.content}</p>
          <Link to={`/posts/edit/${post.id}`}>Edit</Link>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
