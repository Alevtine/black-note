const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

function DbController(databaseFileName) {
  // set exists
  this.exists = fs.existsSync(databaseFileName);

  // set db object
  const db = new sqlite3.Database(databaseFileName);

  const stack = [];
  let stackStep = -1;
  let nextTimerId;

  this.query = function(query) {
    stack.push({ query, to: [] });
    startNext();
    return this;
  }

  this.to = function(callback) {
    const lastQuery = stack[stack.length - 1];
    if (lastQuery) {
      lastQuery.to.push(callback);
    }
    startNext();
    return this;
  }

  function next() {
    stackStep++;
    const nextQuery = stack[stackStep];
    if (nextQuery) {
      console.log('---', stackStep, nextQuery);
      db.all(nextQuery.query, [], fetchRows);
    } else {
      stackStep--;
      console.log('Stack overflow');
    }
  }

  function fetchRows(err, rows) {
    if (err) throw err;
    const currentQuery = stack[stackStep];
    if (currentQuery.to) {
      currentQuery.to.forEach(callback => callback(rows));
    }
    startNext();
  }

  function startNext() {
    clearTimeout(nextTimerId);
    nextTimerId = setTimeout(next);
  }

  startNext();
}

module.exports = DbController;
