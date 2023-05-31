const express = require('express')
const { getMessage } = require('../controllers/messageController');
const messageRouter = express.Router();

// "/api/message": get message
// http://localhost/api/message
// http://localhost:8080/message 
messageRouter.get('/', getMessage)

module.exports = messageRouter;