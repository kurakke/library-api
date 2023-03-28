import express from 'express';

const userController = require('../controller/user.controller');
const router = express.Router();

router.get('/', userController.get);

module.exports = router;
