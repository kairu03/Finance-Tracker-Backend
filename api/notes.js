import express from 'express';
// api/notes.js
import connectDB from '../config/db.js';
import Note from '../models/Note.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default app;
