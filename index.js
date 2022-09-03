const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
const usersRoute=require('./routes/users.route')

app.use(express.json())
app.use(cors()); 

app.use('user',usersRoute)



app.get('/',(req,res)=>{
    res.send('server is running ')
})





app.all('*',(req,res)=>{
    res.send('No route found')
})


app.listen(port, () => {
    console.log('Listening to port', port)
})
process.on('unhandledRejection',(error)=>{
    console.log(error.name,error.message)
    app.close(()=>{
        process.exit(1)
    })
})