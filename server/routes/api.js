const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    todos.find(t => t.id == todoID).complete = !todos.find(t => t.id == todoID).complete
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const CurrentIndex = todos.findIndex(t => t.id==todoID)
    todos.splice(CurrentIndex, 1)
    console.log(CurrentIndex)
    res.send(todos)
})

module.exports = router