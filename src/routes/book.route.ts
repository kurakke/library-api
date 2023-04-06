import express from 'express';

const router = express.Router()
const bookController = require('../controller/book.controller')

router.get('/', bookController.get)

module.exports = router
export default router