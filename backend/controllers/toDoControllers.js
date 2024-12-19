import { getAllTodos , addTodo, updateTodo, deleteTodo} from '../services/toDoService.js';

export const getTodos = async (req, res) => {
    getAllTodos().then((todos) => {
        res.status(200).json(todos);
    })
    .catch((err) => {
        res.status(500).json({ error: 'Failed to fetch to-dos' });
    });
};

export const addTodoFun = (req, res)=>{
    console.log(req, 'request00');
    const {title, description, completed} = req.body;

    if(!title || !description || !completed){
        res.status(400).json({error: 'title, description, completed is required'})
    }

    console.log(title, description, completed, '************');
    addTodo({title, description, completed}).then(()=>{
        res.status(200).json({msg: 'added successfully'});
    }).catch((err)=>{
        res.status(500).json({error: err});
    })
}

export const updateTodoFun = (req, res) =>{
    const {id} = req.query;

    if(!id || isNaN(id)){
        res.status(400).json({error : 'invalid ID'})
    }

    const {title, description, completed} = req.body;

    if(!title || !description || !completed){
        res.status(400).json({error: 'title, description, completed is required'})
    }

    updateTodo({title, description, completed, id}).then(()=>{
        res.status(200).json({msg: "updated succesfully"})
    }).catch((err)=> res.status(400).json({error: err}));

}

export const deleteTodoFun = (req, res) =>{
    const { id } = req.query;
    if(!id || isNaN(id)){
        return res.status(400).json({error: 'Invalid id'})
    }

    deleteTodo(id).then(()=> res.status(200).json({msg: 'Todo is deleted successfully'}))
    .catch((err)=> res.status(400).json({err: err}))
} 