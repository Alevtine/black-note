const DbController = require('./DbController');

const DATABASE_FILENAME = './testDb1.db3';
const db = new DbController(DATABASE_FILENAME);

if (!db.exists) {
  initDatabase(db);
}

function initDatabase(db) {
  db.query('CREATE TABLE users ( id INT, name VARCHAR )')
    .query('CREATE TABLE notes ( id INT, title VARCHAR, userId INT )');
}

const userId = Math.floor(100 * Math.random());
const noteId = Math.floor(100 * Math.random());

db.query('SELECT * FROM users')
  .to(rows => console.log('Result:', rows));

setTimeout(function() {
  db.query('SELECT * FROM notes')
    .to(rows => console.log('Notes:', rows));
}, 1000);
