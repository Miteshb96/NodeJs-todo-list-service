const {
    ToDo
} = require("../models");


class ToDoController {
    constructor() {
        this.getTodolist = this.getTodolist.bind(this);
        this.addToList = this.addToList.bind(this);
        this.editStatus = this.editStatus.bind(this);
    }

    //Display Thread list
    async getTodolist(req, res) {
        try {
            const temp = await ToDo.find({bucket_id: req.params.id}).lean();
            temp.status_code = 200;
            return res.send(temp);
        } catch (error) {
            console.log(error);
        }
    }

    //Add new thread
    addToList(req, res) {
        try {
            const {
                todo_id,
                title,
                current_status,
                date,
                content,
                bucket_id
            } = req.body


            const newThread = new ToDo({
                todo_id,
                title,
                current_status,
                date,
                content,
                bucket_id
            });

            newThread.save((err, data) => {
                if (err) throw err;
                const response = {
                    "message": "new to-do task is added successfully."
                }
                response.status_code = 200
                res.json(response);
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Edit Status of To-do 
    editStatus(req, res) {
        try {
            const {
                todo_id,
                current_status,
            } = req.body


            ToDo.updateOne({ todo_id: todo_id }, {
                current_status: current_status
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

}

module.exports = new ToDoController()