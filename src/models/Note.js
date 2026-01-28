import mongoose from 'mongoose';

// 1- create a schema
// 2- model based off of that schema

const noteSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  date: {
    type: Date,
    required: true
  }
},
  { timestamps: true } // createdAt, updatedAt
);

// create a 'Note' model based of noteSchema
const Note = mongoose.model('Note', noteSchema);

export default Note;


