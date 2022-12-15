require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(cors());
app.use(express.json());

const url = process.env.API_URL;
const PORT = process.env.PORT;
axios.defaults.headers.common.Authorization = process.env.API_KEY;


//Rating and Reviews

const getReview = (req, res) => {
  axios.get(
    `${url}/reviews`,
    {
      params: {
        product_id: req.params.product_id,
        count: req.params.count,
        sort: req.params.sort
      },
    }).then((result) => {
    res.status(200).send(result.data.results);
    console.log('received');
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
    res.status(200).send(result.data);
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
  axios.put(`${process.env.API_URL}/qa/questions/${req.params.id}/helpful`, req.body, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { console.log(data); res.send(200); })
    .catch((err) => { res.send(err); });
});

app.post('/answers/:id/helpful', (req, res) => {
  console.log('Serving helpful answer request')
  axios.put(`${process.env.API_URL}/qa/answers/${req.params.id}/helpful`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => { res.send(200); console.log(data); })
    .catch((err) => { res.send(err); console.log(err)});
});
app.post('/answers/:id/report', (req, res) => {
  axios.put(`${process.env.API_URL}/qa/answers/${req.params.id}/report`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => res.send(200))
    .catch((err) => res.send(err));
})
app.post('/question/:id/report', (req, res) => {
  axios.put(`${process.env.API_URL}/qa/questions/${req.params.id}/report`, {
    headers: { Authorization: process.env.API_KEY },
  })
    .then((data) => res.send(200))
    .catch((err) => res.send(err));
})
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
