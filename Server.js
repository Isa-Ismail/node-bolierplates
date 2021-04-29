const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000

const db = mysql.createPool ({
    host:"192.168.31.138",
    user:"root",
    port:3301,
    password:"doggo",
    database:"sys"
})
// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO student VALUES ( 16, 'HOLAmama')"
//     db.query(sqlInsert, (err, response) => {
//         if(err){
//             console.log(err)
//             res.send('amigo')
//         }
//         else{
//             console.log(response)
//             res.send('rest in peace')
//         }
//     })
// })


let f;

db.query("SELECT * FROM football_clubs", (err, res) => {
    
    if(err){
        console.log(err)
    }
    else{
        f = res;
        f.forEach( e => {
            console.log(e)
        })
        console.log(JSON.stringify(f))
    }
})

app.get('/', (req, res) => {
    console.log('hello')
    res.send(f)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))