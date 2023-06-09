import express from 'express';

const router = express.Router();
const bookController = require('../controller/book.controller');

router.get('/', bookController.get);
router.get('/:id', bookController.getDetail);
router.post('/serch', bookController.serch);
router.post('/lendRecord', bookController.create)
router.put('/lendRecord', bookController.update)
router.post('/lendRecord/delete', bookController.remove)

module.exports = router

export default router;
