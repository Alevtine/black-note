const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 5000;
const somejson = require('./somejson')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/note/list', (req, res) => {
  res.json(somejson)
});

app.get('/api/note/:id', (req, res) => {
  let note = somejson.find(note => note.id === Number(req.params.id))
  res.send(note)
});

app.post('/api/note', (req, res) => {
  const date = new Date().toLocaleString();
  const note = {
    id: somejson.length,
    date,
    title: 'some_title',
    text: req.body.typed,
  }
  somejson.push(note)
  res.json(note);
});

app.put('/api/note/:id', (req, res) => {
  const note = somejson.find(note => note.id === Number(req.params.id));
    note.date = new Date().toLocaleString();
  res.json(note)
})

app.get('/', (req, res) => {
  res.status(404).send(`Error is ${res.statusCode}: page is not found`)
})

app.get('/ping', (req, res) => {
  res.json({
    "data": "pong"
  })
})

app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleString();
  console.log(currentTime)
  res.json({
    currentTime,
  })
})

app.use('/*', (req, res) => {
  res.status(501).send(`Error is ${res.statusCode}: not implemented to return something`)
})


app.listen(port, () => console.log(`Listening on port ${port}`));
