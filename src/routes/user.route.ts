import express from "express";

const router = express.Router()
const userController = require('../controller/user.controller')

router.post('/logIn', userController.logIn)

module.exports = router
export default router