const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const dbFilePath = path.join(__dirname, '../db/db.json');

// GET all notes
router.get('/notes', async (req, res) => {
  try {
    const data = await fs.readFile(dbFilePath, 'utf8');
    res.json(JSON.parse(data || '[]'));
  } catch (err) {
    res.status(500).json({ error: 'Failed to read notes' });
  }
});

// POST a new note
router.post('/notes', async (req, res) => {
  const newNote = { id: uuidv4(), ...req.body };

  try {
    const data = await fs.readFile(dbFilePath, 'utf8');
    const notes = JSON.parse(data || '[]');
    notes.push(newNote);

    await fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2));
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save note' });
  }
});

// DELETE a note
router.delete('/notes/:id', async (req, res) => {
  const noteId = req.params.id;

  try {
    const data = await fs.readFile(dbFilePath, 'utf8');
    const notes = JSON.parse(data || '[]');
    const updatedNotes = notes.filter(note => note.id !== noteId);

    await fs.writeFile(dbFilePath, JSON.stringify(updatedNotes, null, 2));
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
