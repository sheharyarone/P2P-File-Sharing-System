// models/file.js

const db = require('../config/db');

const File = {};

File.create = (port, filename, callback) => {
  db.query('INSERT INTO files (port, filename) VALUES (?, ?)', [port, filename], callback);
};

File.getAll = (callback) => {
  db.query('SELECT * FROM files', callback);
};

module.exports = File;
