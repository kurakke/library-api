import express from "express";

const router = express.Router()
const userController = require('../controller/user.controller')

router.post('/signIn', userController.signIn)

module.exports = router