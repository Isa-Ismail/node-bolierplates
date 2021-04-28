const express = require('express')

const app = express()


// make a static folder for use
app.use(express.static('public'))

//app.set()
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))