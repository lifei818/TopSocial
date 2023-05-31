const express = require('express')
const {getHighline} = require ('../controllers/highlineController')
const highlineRouter = express.Router();


// "/api/highline": get highline
// http://localhost/api/highline
// http://localhost:8000/highline
highlineRouter.get('/',getHighline)

module.exports = highlineRouter;