import express from "express";

const router = express.Router()
const userController = require('../controller/user.controller')

router.post('/create', userController.create)

module.exports = router
export default router