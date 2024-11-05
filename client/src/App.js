import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
