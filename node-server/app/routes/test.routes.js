module.exports = (app) => {
    const test = require('../controllers/test.controller.js');

    app.post('/tests', test.create);

    // Retrieve all Notes
    app.get('/tests', test.findAll);

    // Retrieve a single Note with noteId
    app.get('/tests/:noteId', test.findOne);

    // Update a Note with noteId
    app.put('/tests/:noteId', test.update);

    // Delete a Note with noteId
    app.delete('/tests/:noteId', test.delete);

}