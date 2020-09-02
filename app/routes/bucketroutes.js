const express = require("express");
const { BucketController } = require("../controllers");

const app = express();

// Get list of existing buckets
app.get("/", BucketController.getBucket)

// Add new bucket to the list
app.post("/", BucketController.addBucket)

// Edit Existing bucket
app.put("/", BucketController.editBucket)

// Delete Exiting Bucket
app.delete("/", BucketController.deleteBucket)

module.exports = app;
