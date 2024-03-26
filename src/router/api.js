

const express = require('express')
const { registerUser } = require('../controller/userController')
const router = express.Router()


router.get('/', (req, res)=>{
    return res.send('server is running')
})

router.post('/register', registerUser)



module.exports = router