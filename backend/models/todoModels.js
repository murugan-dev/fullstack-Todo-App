import db from '../config/db.js';

const createTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS todos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false
    )`;

    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('To-Do table ready');
    });
};

const getAllTodos = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM todos';
        db.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

const addTodo = ({title, description, completed}) =>{

    return new Promise((res, rej)=>{
        const query = 'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)';
        db.query(query,[title, description, completed], (err, results)=>{
            if(err) rej(err);
            res(results);
        })
    })
}


const updateTodo = ({title, description, completed, id}) =>{
return new Promise((res, rej)=>{
    const query = 'UPDATE todos SET title = ?, description= ?, completed = ? WHERE id = ?';
    db.query(query, [title, description, completed, id], (err, results)=>{
        if(err) rej(err);
        res(results);
    })
})
}

const deleteTodo = (id)=>{
    return new Promise((res, rej)=>{
        const checkQuery = 'SELECT * FROM todos WHERE id = ?';
        db.query(checkQuery, [id], (checkErr, checkResult) => {
            if (checkErr) {
                console.error('Error checking ID existence:', checkErr);
                return rej({ error: 'Id not found' });
            }

            if (checkResult.length === 0) {
                // If no record found, reject with an error
                return rej({ error: `No todo found with ID ${id}` });
            }
        });

        const query = 'DELETE FROM todos WHERE id = ?';
        db.query(query, [id], (err, ressult)=>{
            if(err) rej(err);
            res(ressult);
        })
    })
}


createTable();

export default { getAllTodos, addTodo, updateTodo, deleteTodo };