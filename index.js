const express = require('express');
const cors = require('cors');

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const usersRoute = require('./routes/users.route');
const dbConnect = require('./util/dbConnect');
const loadUsers = require('./users');


app.use(express.json())
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));


dbConnect()
app.use('/user', usersRoute)

app.all('*', (req, res) => {
    res.send('No route found')
})

app.get('/', (req, res) => {
    res.send('Running Server !!!')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})
process.on('unhandledRejection', (error) => {
    console.log(error.name, error.message)
    app.close(() => {
        process.exit(1)
    })
})