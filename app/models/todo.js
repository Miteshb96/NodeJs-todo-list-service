const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ToDo = new schema({
    todo_id: String,
    title: String,
    current_status: String,
    date: String,
    content: String,
    bucket_id: String
}, {
    versionKey: false
});

module.exports = mongoose.model('ToDo', ToDo);