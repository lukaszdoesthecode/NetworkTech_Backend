require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const flashcardSetRouter = require('./routes/flashcardsets');
app.use('/flashcardSets', flashcardSetRouter);

const flashcardRouter = require('./routes/flashcards');
app.use('/flashcards', flashcardRouter);

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

app.listen(3000, () => console.log('Server Started'));
