const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(express.json());

const url = process.env.API_URL;
const port = process.env.PORT;
axios.defaults.headers.common.Authorization = process.env.AUTH_KEY;

const getReview = (req, res) => {
  axios.get(
    `${url}/reviews`,
    {
      params: { product_id: req.params.product_id },
    }).then((result) => {
    res.status(200).send(result.data.results);
  }).catch((err) => {
    console.log(err);
  });
};

const getMetaData = (req, res) => {
  axios.get(
    `${url}/reviews/meta`,
    {
      params: { product_id: req.params.product_id },
    }).then((result) => {
    res.status(200).send(result.data.results);
  }).catch((err) => {
    console.log(err);
  });
};

app.get('/reviews/:product_id', (req, res) => {
  getReview(req, res);
});

app.get('/reviews/meta/:product_id', (req, res) => {
  getMetaData(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
