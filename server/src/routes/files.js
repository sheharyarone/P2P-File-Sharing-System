// routes/files.js

const express = require('express');
const router = express.Router();
const File = require('../models/file');

// Create new file entries
router.post('/', (req, res) => {
  let data = req.body;

  // Check if the data is wrapped in square brackets
  if (!Array.isArray(data)) {
    // If not an array, try parsing it as JSON
    try {
      data = JSON.parse(data);
    } catch (error) {
      return res.status(400).send('Invalid JSON format');
    }
  }

  // Ensure data is an array
  if (!Array.isArray(data)) {
    return res.status(400).send('Invalid JSON format');
  }

  // Process each item in the array
  const promises = data.map(item => {
    const { Link, Filename } = item;
    return new Promise((resolve, reject) => {
      File.create(Link, Filename, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });

  // Wait for all promises to resolve
  Promise.all(promises)
    .then(() => res.status(201).send('Files created successfully'))
    .catch(error => {
      console.error('Error creating files:', error.message);
      res.status(500).send('Error creating files');
    });
});


// Get all file entries
router.get('/', (req, res) => {
    File.getAll((err, files) => {
      if (err) {
        console.error('Error fetching files:', err.message);
        res.status(500).send('Error fetching files');
        return;
      }
      res.json(files);
    });
  });

  
module.exports = router;
