import express from "express";

const router = express.Router()
const userController = require('../controller/user.controller')

router.post('/create', userController.create)
router.get('/lendRecord/:id', userController.getLendRecord);

module.exports = router
export default router