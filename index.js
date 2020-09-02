const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

var buckets = require("./app/routes/bucketroutes");
var todo = require("./app/routes/todoroutes");

const cors = require("cors")
const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json()); //Parses the text as JSON and exposes the resulting object on req.body

mongoose.promise = global.promise

mongoose.connect("mongodb://127.0.0.1:27017/todolist");

app.use("/bucket", buckets);
app.use("/todo", todo);

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`);
})
