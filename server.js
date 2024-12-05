const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/web-development', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/web-development.html'));
});

app.get('/seo-optimization', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seo-optimization.html'));
});

app.get('/content-writing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/content-writing.html'));
});

app.get('/online-marketing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/online-marketing.html'));
});

app.get('/meta-ads', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/meta-ads.html'));
});

app.get('/youtube-ads', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/youtube-ads.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
