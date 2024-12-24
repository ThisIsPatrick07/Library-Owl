// IMPORTS
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// MongoDB 
const connectDB = require('./db/connectDB.js');
connectDB();

// middlwares
const { addLogEntry } = require('./middlewares/addLogEntry.middlewares.js');
const { checkForAuthentication, restrictToRole } = require('./middlewares/auth.middlewares.js');

// routers
const booksRouter = require('./routes/books.routes.js');
const usersRouter = require('./routes/users.routes.js');
const staticRouter = require('./routes/staticRoute.routes.js');

// INITIALIZING APP
const app = express();
const PORT = process.env.PORT || 8003;

// SSR engine setup
const viewsPath = path.resolve('./views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// lib middlewares
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(cookieParser());

// custom middlewares
const logFilePath = './logs.txt';
app.use(addLogEntry(logFilePath));
app.use(checkForAuthentication);

// routing
app.use('/books', booksRouter);
app.use('/users', usersRouter);
app.use('/', staticRouter);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });