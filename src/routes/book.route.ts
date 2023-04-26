import express from 'express';

const router = express.Router();
const bookController = require('../controller/book.controller');

router.get('/', bookController.get);
router.get('/:id', bookController.getDetail);
router.post('/lendRecord', bookController.create)
router.put('/lendRecord', bookController.update)
module.exports = router

export default router;
