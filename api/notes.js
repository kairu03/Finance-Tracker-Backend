import express from 'express';
import mongoose from 'mongoose';
import Note from '../models/Note.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// <-- inline DB connection for Vercel
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// GET /api/notes
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default app;
