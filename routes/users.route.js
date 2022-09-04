const express=require('express') 
const usersController = require('../controllers/users.controller');
const router=express.Router()

router
.route('/random')
.get(usersController.randomUser)
router
.route('/all')
.get(usersController.allUsers)
router
.route('/save')
.post(usersController.saveUsers)
router
.route('/update/:id')
.patch(usersController.updateUsers)
router
.route('/bulk-update')
.patch(usersController.bulkUsers)


module.exports=router