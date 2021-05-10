const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 5000

const db = mysql.createConnection ({
    host:"192.168.31.138",
    user:"root",
    port:3301,
    password:"doggo",
    database:"sys"
})

db.connect((err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log('database interpreted successfully')
    }
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

app.get('/', (req, result) => {
    let query = `SELECT * FROM sys.football_clubs WHERE UCL_trophies IN (SELECT min(UCL_trophies) FROM sys.football_clubs)`

        db.query( query , (err, res) => {
            
            if(err){
                console.log(err)
            }
            else{
                f = res;
                f.map( e => {
                    console.log(e.club_name)
                })
                console.log(JSON.stringify(f))
                result.json(f)
                }
            })
            console.log(req.url, req.method)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))