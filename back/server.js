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


app.listen(port, () => console.log(`Listening on port ${port}`));
