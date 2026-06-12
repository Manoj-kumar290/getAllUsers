const express=require('express');
const { register, login, logout, getAllUsers } = require('../controller/authController');
const isAuthenticated = require('../middleware/isAuthenticated');
const router=express.Router();

router.post('/signup',register)
router.post('/login',login)
// protected route
router.get('/logout',isAuthenticated,logout)
router.get('/all',isAuthenticated,getAllUsers)
module.exports=router;

