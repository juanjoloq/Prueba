const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
