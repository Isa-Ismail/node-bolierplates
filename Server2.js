const express = require('express')
const morgan = require('morgan')

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
