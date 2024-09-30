const express = require('express');
const path = require('path');

const router = express.Router();

// Serve to the home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});

// Serve to the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});

module.exports = router;
