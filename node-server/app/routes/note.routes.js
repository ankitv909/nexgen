module.exports = (app) => {
  const notes = require('../controllers/note.controller.js');
  const User = require('../controllers/user.controller.js');

  // Create a new Note
  app.post('/register', User.register);
  app.post('/login', User.login);

  app.post('/notes', notes.create);

  // Retrieve all Notes
  app.get('/notes', notes.findAll);

  // Retrieve a single Note with noteId
  app.get('/login/:userId', User.findOne);
  app.post('/notes/:noteId', notes.findOne);

  // Update a Note with noteId
  app.put('/notes/:noteId', notes.update);

  // Delete a Note with noteId
  app.delete('/notes/:noteId', notes.delete);
}