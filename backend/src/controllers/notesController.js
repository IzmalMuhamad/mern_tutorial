export const getAllNotes = (req, res) => {
  res.status(200).send('You requested the notes through the API!');
};

export const createNote = (req, res) => {
  res.status(201).send('You created a new note through the API!');
};  

export const updateNote = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`You updated the note with ID ${id} through the API!`);
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`You deleted the note with ID ${id} through the API!`);
};