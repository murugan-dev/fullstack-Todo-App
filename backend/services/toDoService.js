import TodoModel from "../models/todoModels.js";

export const getAllTodos = () => {
    return TodoModel.getAllTodos();
};

export const addTodo = (data)=>{
    return TodoModel.addTodo(data);
}

export const updateTodo = (data)=>{
    return TodoModel.updateTodo(data);
}

export const deleteTodo = (id) =>{
    return TodoModel.deleteTodo(id)
}