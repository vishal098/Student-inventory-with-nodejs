const express = require("express")

// const mysql = require("mysql");

const dotenv = require("dotenv").config();

const Router = express.Router()

const app = express()

app.use(express.json())

// var connect = require('knex')({
//     client:"mysql",
//     connection:{
//         host :"localhost",
//         user : "root",
//         password:"vishal1234",
//         database:"student"
//     }
// });


const connect = require("knex")({
    client: "mysql",
    connection: {
        user: process.env.user,
        password: process.env.password,
        host: process.env.host,
        database: process.env.database,
    }
})


connect.schema.hasTable('student_details').then((exist)=>{
    if(!exist){
        return connect.schema.createTable('student_details',function (table) {
            table.increments('id').primary();
            table.string("First_name",20);
            table.string("Last_name",20);
            table.string('email',50).unique().collate()
            table.text("Password",20);
            table.integer("Moblie_no",10);
        })
    }else{
        console.log("table is alredy there");
        
    }
})



app.use('/',get = express.Router());
require('./get')(get,connect);


app.use('/', push = express.Router());
require('./sign_Up')(push,connect)

app.use('/', login = express.Router());
require('./login')(login,connect)

app.use('/', admin = express.Router());
require('./admin')(admin,connect)

app.use('/', delet = express.Router());
require('./delete')(delet,connect)

app.use('/',edit = express.Router());
require('./update')(edit,connect)

const port = 3002
app.listen(port,()=>{
    console.log(`${port} your port is working`)
});