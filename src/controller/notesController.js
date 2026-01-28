import Note from "../models/Note.js";

// GET
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // get the newest first 
    res.status(200).json(notes);

  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// GET
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' })
    res.json(note);

  } catch (error) {
    console.error('Error in getNoteById controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// POST
export const createNote = async (req, res) => {
  try {
    const { amount, category, type, date } = req.body;
    const note = new Note({ amount, category, type, date });

    const savedNote = await note.save();
    res.status(201).json(savedNote);

  } catch (error) {
    console.error('Error in createNote controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// PUT
export const updateNote = async (req, res) => {
  try {
    const { amount, category, type, date } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,
      { amount, category, type, date },
      { new: true });
    if (!updatedNote) return res.status(404).json({ message: 'Note not Found' });

    res.status(200).json({ updatedNote }); // return the updated note

  } catch (error) {
    console.error('Error in updateNote controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// DELETE
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json({ message: 'Note deleted successfully' });

  } catch (error) {
    console.error('Error in deleteNote controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};





 





