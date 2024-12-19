import dotenv from 'dotenv/config';
import mysql  from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err) {
        console.log('failed to Connect the DB');
        console.log(err);
    }
    console.log('DB is connected successfully');
})

export default db;
