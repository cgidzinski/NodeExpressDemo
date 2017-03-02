// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// define the schema for our user model
var todoSchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
});
var Todo = mongoose.model('Todo', todoSchema)
module.exports = {
    Todo: Todo
};
