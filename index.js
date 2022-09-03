const express = require('express');
const cors = require('cors');

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const usersRoute = require('./routes/users.route');
const dbConnect = require('./util/dbConnect');


app.use(express.json())
app.use(cors());

dbConnect()
app.use('/user', usersRoute)









app.all('*', (req, res) => {
    res.send('No route found')
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