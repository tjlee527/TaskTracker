const express = require('express');
const bodyParser = require('body-parser');
const Items = require('../database/index.js');
const axios = require('axios');

const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => console.log(`App listening on port ${port}`));

app.get('/projects/', (req, res) => {
  Items.find({}, (err, docs) => {
    if (err) {
      res.sendStatus(500);
    }
    console.log(docs);
    res.send(docs);
  })
});

app.post('/projects/:id?', (req, res) => {
  console.log(req.body);
  let data = new Items(req.body);
  data.save((err, data) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
})