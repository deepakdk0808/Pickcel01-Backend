"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./configs/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_controllers_1 = __importDefault(require("./controllers/todo.controllers"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get("/todos", todo_controllers_1.default.getTodos);
app.get("/todos/:id", todo_controllers_1.default.getById);
app.post("/todos", todo_controllers_1.default.createTodos);
app.delete("/todos/:id", todo_controllers_1.default.deleteTodos);
app.patch("/todos/:id", todo_controllers_1.default.updateTodos);
const PORT = 4445;
app.listen(PORT, function () {
    (0, db_1.default)();
    console.log(`listening on port ${PORT}`);
});
