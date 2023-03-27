const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    book.id = Math.floor(Math.random() * (100 - 0) + 0);
    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/book', (req, res) => {
    res.send(books);
});

app.get('/contractDetails', (req, res) => {
    let empDetails = [
        {
            id:1,
            name:'James Fischer'
        },
        {
            id:2,
            name:'Erwin Kremshaw'
        },
        {
            id:3,
            name:'Amnda Cortez'
        },
        {
            id:4,
            name:'Conner Beztz'
        }
    ]

    res.send(empDetails);
});


app.put('/book', (req, res) => {
    const id = req.query.id;
    const version = req.query.version;
    console.log(id, version);
    booksObj = books.findIndex((obj => obj.id == id));
    console.log("booksObj===", booksObj);
    books[booksObj].version = version
    res.send(books);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));