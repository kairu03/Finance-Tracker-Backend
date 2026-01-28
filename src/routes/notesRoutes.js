import express from 'express'
import { createNote, updateNote, deleteNote, getAllNotes, getNoteById } from '../controller/notesController.js';

const router = express.Router();

router.get("/", getAllNotes); // GET
router.get("/:id", getNoteById); // GET
router.post("/", createNote); // POST
router.put("/:id", updateNote); // PUT
router.delete("/:id", deleteNote); // DELETE

export default router;
