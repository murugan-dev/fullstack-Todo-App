import express from 'express';
import {getTodos, addTodoFun, updateTodoFun, deleteTodoFun} from '../controllers/toDoControllers.js';



const router = express.Router();

router.get('/', getTodos);
router.post('/add', addTodoFun);
router.put('/updateTodo', updateTodoFun);
router.delete('/deleteTodo', deleteTodoFun);

export default router;