const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{type:String, minlength: [3, 'Name must be longer than 3 characters.']}
}, {timestamps: true});

const Author = mongoose.model('authors', authorSchema);