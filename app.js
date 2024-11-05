const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parses JSON bodies

// Serve the static files from the React app (after running `npm run build` in React)
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes for handling blog posts
app.use('/api', blogRoutes);

// Catch-all route to serve the React app for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
