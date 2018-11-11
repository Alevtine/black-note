const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const assert = require('assert');

const app = express();

app.use(bodyParser.json({ extended: false }));

app.get('/api/article/list', (req, res) => {
  res.json({ data: [{}, {}, {}] });
});

app.post('/api/note', (req, res) => {
  res.json({ data: { id: 100, ...req.body } });
});

app.use((req, res) => {
  res.statusCode = 501;
  res.send();
});

app.listen(8080, (err) => {
  if (err) console.error(err);
  else startTests();
});

async function startTests() {
  const URI = 'http://localhost:8080/api';

  // test 1
  let data = await call(`${URI}/article/list`);
  assert(data, 'Check data exists');
  assert(data.length > 0, 'Check data.length');

  // test 2
  data = await call(`${URI}/note`, 'POST', { title: 'Test title', text: 'Some text' });
  assert(data, 'Check data exists');
  assert(data.id > 0, 'Check id');
  assert(data.title === 'Test title', 'Check title');
  assert(data.text === 'Some text', 'Check text');

  // test 3
  const { status } = await fetch('http://localhost:8080/asfasgasgasg');
  assert(status === 501, 'Check status 501');
}

async function call(url, method = 'GET', data = null) {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  });
  const { status } = response;
  if (status !== 200) {
    throw new Error(`${method} ${url} returns ${status}`);
  }
  return (await response.json()).data;
}
