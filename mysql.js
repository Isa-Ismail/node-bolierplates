const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3307,
    password:"whale",
    database:"sys"
})

connection.connect((res, err) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})