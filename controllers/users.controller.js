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
    fs.readFile('users.json',(err,user)=>{
        if(err){
            res.write('Failed to read data!!!')
            res.end()
        }
        else{          
            res.write(user)          
            res.end()
        }
    })
}
module.exports.saveUsers = (req, res) => {

    fs.readFile('users.json',(err,user)=>{
        if(err){
            res.write('Failed to read data!!!')
            res.end()
        }
        else{          
           const data=req.body
           const {id,gender,name,contact,address,photoUrl}=data
           if((gender,name,contact,address,photoUrl)){
            const newData={
                id:req.body.id||user.length+1,
                gender: req.body.gender,
                name: req.body.name,
                contact: req.body.contact,
                address: req.body.address,
                photoUrl: req.body.photoUrl,
            }
            const t=JSON.parse(user)
            const r=[...t,newData]
            const data=JSON.stringify(r)
            fs.writeFile('users.json',data,(err)=>{
                if(err){
                           res.write('Data Failed to write')
                    res.end()  
                }
            })
            // const result=JSON.stringify(newData,undefined,2)+","
            // fs.appendFile('user.json',result,(err)=>{
            //     if(err){
            //         res.write('Data Failed to write')
            //         res.end()
            //     }else{                
            //         res.write(result)                
            //         res.end()
            //     }
            // })
           }
      
        }
    })

    
  
}
module.exports.updateUsers=(req,res)=>{

}
module.exports.bulkUsers=(req,res)=>{

}