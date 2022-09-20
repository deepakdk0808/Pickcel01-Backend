"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { ObjectID} from "mongoose";
const todo_models_1 = __importDefault(require("../models/todo.models"));
//POST REQUEST
const createTodos = (req, res) => {
    const { id, title } = req.body;
    const todos = new todo_models_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        id,
        title
    });
    return todos
        .save()
        .then((todos) => res.json({ todos }))
        .catch((err) => res.json({ err }));
};
//GET REQUEST 
const getTodos = (req, res) => {
    return todo_models_1.default.find()
        .then((todos) => res.json({ todos }))
        .catch((err) => res.json({ err }));
};
//GET BY ID REQUEST
const getById = (req, res) => {
    const id = req.params.id;
    return todo_models_1.default.findById(id)
        .then((todos) => res.json({ todos }))
        .catch((err) => res.json({ err }));
};
//DELETE REQUEST
const deleteTodos = (req, res) => {
    // console.log(req.params.id)
    // console.log(req.params)
    let objID = new mongoose_1.default.Types.ObjectId(req.params.id.replace("\n", ""));
    // console.log(objID.isValid)
    todo_models_1.default.findByIdAndDelete(objID)
        .then((todos) => (todos ? res.status(201).json({ todos, message: "Deleted" }) : res.status(404).json({ message: "Not Found" })))
        .catch((err) => res.json({ err }));
    // res.json({})
};
//PATCH REQUEST
const updateTodos = (req, res) => {
    let objID = new mongoose_1.default.Types.ObjectId(req.params.id.replace("\n", ""));
    return todo_models_1.default.findById(objID)
        .then((todos) => {
        if (todos) {
            todos.set(req.body);
            return todos
                .save()
                .then((todos) => res.status(201).json({ todos }))
                .catch((err) => res.status(500).json({ err }));
        }
        else {
            res.status(404).json({ message: "Not Found" });
        }
    })
        .catch((err) => res.status(500).json({ err }));
};
exports.default = { createTodos, getTodos, getById, updateTodos, deleteTodos };
