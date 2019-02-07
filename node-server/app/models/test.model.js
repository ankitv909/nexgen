const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const TestSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Test', TestSchema);