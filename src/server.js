const axios = require('axios')

require('dotenv').config();

const path = require('path');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors')

app.use(express.static(path.join(__dirname, '../public')));
const bodyparser = require('body-parser')// app.use(express.static(path.join(__dirname, '../client/src')));
app.use(bodyparser.json())
app.use(cors());
// app.use(express.json());
const url = process.env.URL

axios.defaults.headers.common['Authorization'] = process.env.AUTH_KEY
// app.get( `/`, (req, res) => {if (err) {console.log('testing')} else { console.log('did it make it here?')
//   res.send(res.data.data)}

// })
app.get('/', (req, res) => {
  res.send('successfully landed')
})
app.get(`/related`, (req, res) => { console.log(req.params)

  axios.get(`${url}/products/${req.params.product_id}/related`, {'Authorization': process.env.AUTH_KEY}).then((data) => {
    console.log('response', data.data);

    res.send(req.params)
  }).catch((err) => {
    console.log(err)


    res.send(err)
  })


})









app.listen(PORT, (err) => {

  if (err) {

    return console.error(err);

  }

  return console.log(`server is listening on ${PORT}`);
});


console.log(`Listening at http://localhost:${PORT}`);
