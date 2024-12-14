const express = require('express');
const app = express();
const port = 3001; 

const videoLinks = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
  "https://example.com/video3.mp4",
  "https://example.com/video4.mp4"
];

app.get('/', (req, res) => {
  res.send("Welcome to the Akatsuki Video API! Use /random to get a random Akatsuki video link.");
});

app.get('/random', (req, res) => {
  const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  res.json({ video_url: randomLink });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
