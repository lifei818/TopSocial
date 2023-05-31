const express = require('express')
const { getRequest } = require('../controllers/requestController');
const requestRouter = express.Router();


// "/api/request": get request
// http://localhost/api/request
// http://localhost/8000/request
requestRouter.get('/', getRequest)


module.exports = requestRouter;