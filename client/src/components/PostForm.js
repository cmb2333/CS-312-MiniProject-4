import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function PostForm({ isEdit }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      axios.get(`/api/posts/${id}`).then((response) => {
        const { name, title, content } = response.data;
        setName(name);
        setTitle(title);
        setContent(content);
      });
    }
  }, [id, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { name, title, content };
    const request = isEdit
      ? axios.put(`/api/posts/${id}`, postData)
      : axios.post('/api/posts', postData);

    request.then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">{isEdit ? 'Update Post' : 'Submit Post'}</button>
    </form>
  );
}

export default PostForm;
