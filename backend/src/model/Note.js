import mongoose from "mongoose";

// 1- create a schema for the note
// 2- create a model based on the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model("Note", noteSchema); // this basically creates a collection called "notes" in MongoDB based on the noteSchema model
// All notes must have a title and content, and will also have createdAt and updatedAt fields

export default Note;
