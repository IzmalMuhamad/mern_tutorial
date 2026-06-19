import Note from "../model/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // This will retrieve all notes from the database, sorted by creation date
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error at getAllNotes controller:", error);
    res.status(500).json({ error: "Error retrieving notes through the API!" });
  }
};

export async function getNoteById(req, res) {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error at getNoteById controller:", error);
    res.status(500).json({ error: "Error retrieving notes through the API!" });
  }
};

export async function createNote(req, res) {
  try {
    const { title, content } = req.body; // request the body from the client side, which should contain the title and content of the note
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    console.error("Error at createNote controller:", error);
    res.status(500).json({ error: "Error creating note through the API!" });
  }
};  

export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error at updateNote controller:", error);
    res.status(500).json({ error: "Error updating note through the API!" });
  }
};

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message: `Note with title ${deletedNote.title} has been deleted successfully!` });
  } catch (error) {
    console.error("Error at deleteNote controller:", error);
    res.status(500).json({ error: "Error deleting note through the API!" });
  }
};