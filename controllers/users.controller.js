const fs = require('fs')
const loadUsers = require('../users')

module.exports.randomUser = (req, res, next) => {
   
    fs.readFile('users.json',(err,user)=>{
        if(err){
            res.write('Failed to read data!!!')
            res.end()
        }
        else{
            const data=JSON.parse(user)
            const result=data[Math.floor(Math.random()*data.length)]
           
            const r=JSON.stringify(result)
            res.write(r)
            // res.json(result)
            res.end()
        }
    })


}
module.exports.allUsers = (req, res) => {
    res.json(users)
}
module.exports.saveUsers = (req, res) => {

}
// module.exports.updateUsers=(req,res)=>{

// }
// module.exports.bulkUsers=(req,res)=>{

// }