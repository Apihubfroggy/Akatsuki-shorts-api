const express = require('express');
const app = express();
const port = 3001; 

const videoLinks = [
  "https://drive.google.com/uc?export=download&id=1TuH2aZh9lyKSoGi0FgKJSHysIdHHT1Qs",
  "https://drive.google.com/uc?export=download&id=1UKg6OOk0DxKxwyeEKUgdfMOyy_5bnJRr",
  "https://drive.google.com/uc?export=download&id=1UMw8JSAqJ0sN2QBHUUyAGRzA-6oHdelI",
  "https://drive.google.com/uc?export=download&id=1UAUVdRdSiNlvTAIEt1fWe7BPslsnbhsj",
  "https://drive.google.com/uc?export=download&id=1UPZ9l5P2fccjrZchG_bpQkVXdXSYktx2",
  "https://drive.google.com/uc?export=download&id=1UHjXdMhv30mzS2qBp_KinSp5kGGf2dYJ",
  "https://drive.google.com/uc?export=download&id=1UHYZ0q0tTjUlBaKhq9S9ZlGlYNIfk-X1",
  "https://drive.google.com/uc?export=download&id=1U9fN9yMD6_2IjOWhVbzGfGDfz0P1jqtx",
  "https://drive.google.com/uc?export=download&id=1U8XSbtfpKJWfx1hNE7kMgxU8nFdwIQuC",
  "https://drive.google.com/uc?export=download&id=1UQBl3dikglsbkjuHR_OONN0NX7GSWBOP",
  "https://drive.google.com/uc?export=download&id=1UaCM-_xZr_oMVK6Z2OcOvM5qhg6-1KgO",
  "https://drive.google.com/uc?export=download&id=1VpNY8GIKZboibIpYl8rxlT-Iy_xklTYf",
  "https://drive.google.com/uc?export=download&id=1VeHWCIbdKKDePtopZE-brg2xErIzYmsN",
  "https://drive.google.com/uc?export=download&id=1V7XTuStr3l3LEvEUy3yf-E59RRYxV_t5",
  "https://drive.google.com/uc?export=download&id=1Va6e-X0QNUUG8sUwlcaup43TMr9Viko0",
  "https://drive.google.com/uc?export=download&id=1VlyjoR3o6UtpEXP6e84eo7XgwMqbbprY",
  "https://drive.google.com/uc?export=download&id=1UdDSt53MqbRoJTuNOBBvfwvIlAhtiA9F",
  "https://drive.google.com/uc?export=download&id=1Vhfp5lY4SYytaMxH2e12jwhMaAyDZfjT",
  "https://drive.google.com/uc?export=download&id=1VVP1igFUfK7TRPf9Y3WARRh_9gjtSQru",
  "https://drive.google.com/uc?export=download&id=1UQHvQWehK4ZZ68Pq9I3igDFsl33gRxBD",
  "https://drive.google.com/uc?export=download&id=1VrKTEjKhP7bXwmfyYeal_2-KGXLI_9AV",
  "https://drive.google.com/uc?export=download&id=1Vqg60DxaqHOHFCcBBPzzdMY21myGUemg",
  "https://drive.google.com/uc?export=download&id=1UphtePpvFK4FO40qYnEA4MYrBMU2LW2k",
  "https://drive.google.com/uc?export=download&id=1UyGKMlDnSRAbm4oqVw0U85-H7UdNH7c_",
  "https://drive.google.com/uc?export=download&id=1VaS4XqSrOnpi0O_zn6CUwb7L5jrxk1uU",
  "https://drive.google.com/uc?export=download&id=1UWvqmYuoUTmIlDpWgtGFwqrZWDCrfiM_",
  "https://drive.google.com/uc?export=download&id=1VQuL2uy1hzyap1AWdAqNqzJofX0aggrA",
  "https://drive.google.com/uc?export=download&id=1VbXzK9rlPosoJRrGEzLni2jQuL7dZjrF",
  "https://drive.google.com/uc?export=download&id=1Vv9Lew_A3FzYNHsE_F0p37fQ8-jhekZZ",
  "https://drive.google.com/uc?export=download&id=1WA7LAyIcyce2xFC9RtQr8l0rTQ5nK1jl"
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
