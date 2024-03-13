const express = require('express');
const fs = require('fs')
const path = require('path')
const db = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// create a route for '/api/notes' that will return the data of the db.json file
app.get('/api/notes', (req, res)=> {
res.json(db)
})

// create a route for '/api/notes' that will post new data into the db.json file

app.post

// get route for /notes that will return the notes.html localhost:3001/notes
app.get('/notes', (req, res)=> res.sendFile(path.join(__dirname, './public/notes.html')));

// get route for * that will return the index.html

app.get('*', (req, res)=> res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, ()=> console.log('server is running'));