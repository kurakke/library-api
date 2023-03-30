import express from 'express';

const router = express.Router()
const bookController = require('../controller/book.controller')

router.get('/', bookController.get)
router.post('/History', bookController.create)
module.exports = router