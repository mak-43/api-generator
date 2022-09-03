let users=[
    { id:1, gender:"Female",name:"Nilanjana",contact:01733333333,address:"uttara",photoUrl:'https://www.indiewire.com/wp-content/uploads/2022/01/AP21190389554952-e1643225561835.jpg'
    },
    { id:2, gender:"Female",name:"Ohona",contact:01733333333,address:"Dhanmondi",photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU'
    },    
    { id:3, gender:"male",name:"akash",contact:01733333333,address:"Tongi",photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7njwJYxu4mNe-gKO_JO2V3alorDOSGaR_Q&usqp=CAU'
    },    
    { id:4, gender:"Female",name:"joli",contact:01733333333,address:"uttara",photoUrl:'https://www.wikistaar.com/wp-content/uploads/2022/06/Angelina-Jolie.webp'
    },    
    { id:5, gender:"male",name:"Leonardo",contact:01733333333,address:"Mohammadpur",photoUrl:'https://media.vanityfair.com/photos/630f663aac8cde6b5cbe9e66/master/pass/1199766919'
    },  
]

module.exports.randomUser=(req,res,next)=>{

    const random=users[Math.floor(Math.random()*users.length)]
    res.json(random)
}
// module.exports.allUsers=(req,res)=>{

// }
// module.exports.saveUsers=(req,res)=>{

// }
// module.exports.updateUsers=(req,res)=>{

// }
// module.exports.bulkUsers=(req,res)=>{

// }