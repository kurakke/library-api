const express = require('express')
const router = express.Router()
const bookController = require('../controller/book.controller')

router.get('/book', bookController.get)

module.exports = router