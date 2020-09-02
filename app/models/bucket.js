const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Bucket = new schema({
    bucket_id: String,
    bucket_name: String,
    current_status: String,
    date: String
}, {
    versionKey: false
});

module.exports =  mongoose.model('Bucket', Bucket);