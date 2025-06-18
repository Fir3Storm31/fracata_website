const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        active: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About',
        active: 'about'
    });
});

app.get('/work', (req, res) => {
    res.render('work', { 
        title: 'Work',
        active: 'work'
    });
});

app.get('/education', (req, res) => {
    res.render('education', { 
        title: 'Education',
        active: 'education'
    });
});

app.get('/volunteering', (req, res) => {
    res.render('volunteering', { 
        title: 'Volunteering',
        active: 'volunteering'
    });
});

app.get('/books', (req, res) => {
    const booksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8'));
    res.render('books', { 
        title: 'Books',
        active: 'books',
        books: booksData.books
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 