import { RequestHandler } from "express";
import mongoose from "mongoose";
// import { ObjectID} from "mongoose";

import Todo from "../models/todo.models"

//POST REQUEST
 const createTodos:RequestHandler=(req,res)=>{
    const {id,title}=req.body

    const todos=new Todo({
        _id:new mongoose.Types.ObjectId(),
        id,
        title

    })
    return todos
    .save()
    .then((todos)=>res.json({todos}))
    .catch((err)=>res.json({err}))
}

//GET REQUEST 
 const getTodos:RequestHandler=(req,res)=>{
   return Todo.find()
   .then((todos)=>res.json({todos}))
   .catch((err)=>res.json({err}))
}

//GET BY ID REQUEST
 const getById:RequestHandler=(req,res)=>{
    const id=req.params.id

    return Todo.findById(id)
    .then((todos)=>res.json({todos}))
    .catch((err)=>res.json({err}))
}



//DELETE REQUEST
const deleteTodos:RequestHandler=(req,res)=>{

        // console.log(req.params.id)
        // console.log(req.params)
        let objID= new mongoose.Types.ObjectId(req.params.id.replace("\n","" ))
        // console.log(objID.isValid)
        
         Todo.findByIdAndDelete(objID)
        .then((todos)=>(todos?res.status(201).json({todos,message:"Deleted"}):res.status(404).json({message:"Not Found"})))
        .catch((err)=>res.json({err}))
        // res.json({})
        
}
     
  

//PATCH REQUEST
 const updateTodos:RequestHandler=(req,res)=>{
   
    let objID= new mongoose.Types.ObjectId(req.params.id.replace("\n","" ))

    return Todo.findById(objID)
    .then((todos)=>{
        if(todos){
            todos.set(req.body)
            return todos
            .save()
            .then((todos)=>res.status(201).json({todos}))
            .catch((err)=>res.status(500).json({err}))
        }
        else{
            res.status(404).json({message:"Not Found"})
        }
    })
    .catch((err)=>res.status(500).json({err}))
}

 
export default {createTodos,getTodos,getById,updateTodos,deleteTodos}

