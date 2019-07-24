const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 5000;
const DbController = require('./DbController');

const DATABASE_FILENAME = './blackNotes.db3';
const DB = new DbController(DATABASE_FILENAME);

if(!DB.exists) {
  DB.query('CREATE TABLE notes ( id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(250), dateCreated TIMESTAMP, dateUpdated TIMESTAMP, text TEXT )');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/note/list', (req, res) => {
  DB.query('SELECT * FROM notes')
    .to(notes => res.json(notes));
});

app.get('/api/note/:id', (req, res) => {
  const noteId = Number(req.params.id);
  DB.query(`SELECT id, title, dateCreated, dateUpdated, text FROM notes WHERE id=${noteId}`)
  .to(notes => notes.map(note => res.json(note)))
});

app.post('/api/note', (req, res) => {
  const date = new Date();
  const { title, text } = req.body;
  DB.query(`INSERT INTO notes (title, dateCreated, text) VALUES("${title}", ${date.getTime()}, "${text}")`)
  .query('SELECT last_insert_rowid() AS id')
  .to(rows => {
    const lastId = rows[0].id;
    DB.query(`SELECT * FROM notes WHERE id=${lastId}`)
      .to(rows => res.json(rows[0]));
  });
});

app.put('/api/note/:id', (req, res) => {
  const date = new Date();
  const { title, text } = req.body;
  const noteId = Number(req.params.id);
  DB.query(`UPDATE notes SET title="${title}", text="${text}", dateUpdated="${date.getTime()}" WHERE id=${noteId}`)
    .to(notes => notes.find(note => res.json(note)));
})

app.delete('/api/note/:id', (req, res) => {
  const noteId = Number(req.params.id);
  DB.query(`DELETE FROM notes WHERE id=${noteId}`)
  .to(notes => notes.find(note => res.json(note)));
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
