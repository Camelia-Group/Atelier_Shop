require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, '../client/src')));

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
console.log(`Listening at http://localhost:${PORT}`);
