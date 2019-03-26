const DbController = require('./DbController');

const DATABASE_FILENAME = './testDb1.db3';
const db = new DbController(DATABASE_FILENAME);

if (!db.exists) {
  initDatabase(db);
}

function initDatabase(db) {
  console.log('**** Fired initDatabase');
  db.query('CREATE TABLE users ( id INT, name VARCHAR )')
    .query('CREATE TABLE notes ( id INT, title VARCHAR, userId INT )');
}

const userId = Math.floor(100 * Math.random());
const noteId = Math.floor(100 * Math.random());

db.query(`INSERT INTO users VALUES(${userId}, 'Alex')`)
  .query(`INSERT INTO notes VALUES(${noteId}, 'Super note', ${userId})`)
  .query('SELECT * FROM users')
  .to(rows => console.log('Result:', rows))
  .query('SELECT * FROM notes')
  .to(rows => console.log('Notes:', rows))
  .to(rows => console.log('Notes 2:', rows));
