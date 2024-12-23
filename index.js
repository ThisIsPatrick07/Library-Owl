require('dotenv').config();
const express = require('express');

const connectDB = require('./db/connectDB.js');

const booksRouter = require('./routes/books.routes.js');
const authorsRouter = require('./routes/authors.routes.js');
const { addLogEntry } = require('./middlewares/addLogEntry.middlewares.js');

connectDB();

const app = express();
const PORT = process.env.PORT || 8004;

const logFilePath = './logs.txt';

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(addLogEntry(logFilePath));

app.get('/', (req, res) => {
	return res.send('Welcome to Home Page!');
});

app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);

// app.get('/api/search/', ())

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });