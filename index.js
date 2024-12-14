const express = require('express');
const app = express();
const port = 3001; 

const videoLinks = [
  "https://drive.google.com/uc?export=download&id=1TbtmdU8aySN1u5TpJf_JBkDXUdiDsn-k",
  "https://drive.google.com/uc?export=download&id=1TmOFgb16w7Dc-e_KYTGBf9eGHpIgKlq3"
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
