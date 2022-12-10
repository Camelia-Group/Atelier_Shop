require('dotenv').config();
const axios = require('axios');
const e = require('express');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/questions', (req, res) => {
  console.log(`${process.env.API_URL}/qa/questions/?product_id=37311`);
  axios.get(`${process.env.API_URL}/qa/questions?product_id=37311&page=1&count=1000`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => {
      // res.send(data);
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.post('/questions', (req, res) => {
  axios.post(`${process.env.API_URL}/qa/questions`, req.body)
    .then((data) => { res.send(data); })
    .catch((err) => { res.send(err).status(401); });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
console.log(`Listening at http://localhost:${PORT}`);
