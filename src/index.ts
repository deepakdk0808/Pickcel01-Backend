import express from "express"
import connect  from "./configs/db"
import bodyParser from "body-parser"
import { Application } from "express"

import controller from "./controllers/todo.controllers"

const app:Application=express()
app.use(bodyParser.json())

app.get("/todos",controller.getTodos)
app.get("/todos/:id",controller.getById)
app.post("/todos",controller.createTodos)
app.delete("/todos/:id",controller.deleteTodos)
app.patch("/todos/:id",controller.updateTodos)

const PORT=4445

app.listen(PORT,function(){
    connect()
   console.log(`listening on port ${PORT}`)
})