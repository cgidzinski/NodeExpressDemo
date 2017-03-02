var DB = require('../models/models');
module.exports = function(app) {
    app.get('/todo', function(req, res) {
        DB.Todo.find({}, function(err, todoList) {
            res.render('index.ejs', {
                user: req.user,
                todoList: todoList
            });
        });
    });
    app.get('/todo/del/:id', function(req, res) {
        DB.Todo.findOne({ _id: req.params.id }, function(err, todo) {
            if (!!todo){
              todo.remove();  
            }
            
            res.redirect("/todo")
        });
    });
    app.get('/todo/add', function(req, res) {
        var newTodo = new DB.Todo()
        newTodo.text = req.query.text;
        newTodo.save();
        res.redirect("/todo")
    });
}
