// models/file.js

const db = require('../config/db');

const File = {};

File.create = (Link, Filename, callback) => {
  db.query('INSERT INTO files (Link, Filename) VALUES (?, ?)', [Link, Filename], callback);
};

File.getAll = (callback) => {
  db.query('SELECT * FROM files', callback);
};

module.exports = File;
