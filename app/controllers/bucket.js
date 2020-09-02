const {
    Bucket
} = require("../models");


class BucketController {
    constructor() {
        this.getBucket = this.getBucket.bind(this);
        this.addBucket = this.addBucket.bind(this);
        this.editBucket = this.editBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
    }

    //Display Thread list
    async getBucket(req, res) {
        try {
            const temp = await Bucket.find();
            // temp.status_code = 200;
            return res.send(temp);
        } catch (error) {
            console.log(error);
        }
    }

    //Add new Bucket
    addBucket(req, res) {
        try {
            const {
                bucket_id,
                bucket_name,
                current_status,
                date
            } = req.body


            const newBucket = new Bucket({
                bucket_id,
                bucket_name,
                current_status,
                date
            });

            newBucket.save((err, data) => {
                if (err) throw err;
                const response = {
                    "message": "new bucket is added successfully."
                }
                response.status_code = 200
                res.json(response);
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Edit Existing Bucket
    editBucket(req, res) {
        try {
            const {
                bucket_id,
                bucket_name,
            } = req.body

            Bucket.updateOne({ bucket_id: bucket_id }, {
                bucket_name: bucket_name
            }, function(
                err,
                response
              ) {
                if (err) {
                  res.send(err);
                } else {
                    response.status_code = 200
                    res.json(response);
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    //Delete Existing Bucket
    deleteBucket(req, res) {
        try {
            const {
                bucket_id
            } = req.body


            Bucket.deleteOne({ id:bucket_id },(err, data) => {
                if (err) throw err;
                const response = {
                    "message": `bucket id ${bucket_id} removed successfully.`
                }
                response.status_code = 200
                res.json(response);
            })

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new BucketController()