const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;

const drinks = require('./models/drinks')



app.get('/', (req, res) => {
  res.send(`Welcome to the Gitpub App`);
});

app.get('/drinks', (req, res) => {
    res.send(drinks);
  });
  

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
