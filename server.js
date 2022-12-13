require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(express.json());

app.get('/questions', (req, res) => {
  axios.get(`${process.env.API_URL}/qa/questions?product_id=37311&page=1&count=1000`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => {
      // res.send(data);
      res.send(data.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post('/questions', (req, res) => {
  axios.post(`${process.env.API_URL}/qa/questions`, req.body, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { res.send(data); })
    .catch((err) => { res.send(err).status(401); });
});

app.get('/products/:id', (req, res) => {
  axios.get(`${process.env.API_URL}/products/${req.params.id}`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => {
      res.send(data.data.name);
    })
    .catch((err) => {
      res.send(err);
    });
});

// body, name, email
app.post('/question/:id', (req, res) => {
  axios.post(`${process.env.API_URL}/qa/questions/${req.params.id}/answers`, req.body, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { res.send(data); })
    .catch((err) => { res.send(err); });
});
app.post('/question/:id/helpful', (req, res) => {
  axios.post(`${process.env.API_URL}/qa/questions/${req.params.id}/helpful`, req.body, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { res.send(data); })
    .catch((err) => { res.send(err); });
});

app.post('/answers/:id/helpful', (req, res) => {
  axios.post(`${process.env.API_URL}/qa/answers/${req.params.id}/helpful`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { res.send(data); })
    .catch((err) => { res.send(err); });
});
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
console.log(`Listening at http://localhost:${PORT}`);
