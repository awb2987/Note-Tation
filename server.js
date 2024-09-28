const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Path to the database file
const dbPath = path.join(__dirname, 'db/db.json');

// API routes

// GET /api/notes - Retrieve notes
app.get('/api/notes', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read notes' });
    }
    res.json(JSON.parse(data));
  });
});

// POST /api/notes - Save a new note
app.post('/api/notes', (req, res) => {
  const newNote = { id: uuidv4(), ...req.body };

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read notes' });
    }

    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save note' });
      }
      res.json(newNote);
    });
  });
});

// DELETE /api/notes/:id - Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read notes' });
    }

    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);

    fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete note' });
      }
      res.json({ message: 'Note deleted' });
    });
  });
});

// HTML routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
