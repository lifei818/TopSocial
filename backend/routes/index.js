const express = require('express');
const axios = require('axios');

const highlineRouter = require('./highline')
const messageRouter = require('./message')
const profileRouter = require('./profile')
const cardsRouter = require('./cards')
const requestRouter = require('./request')


// create router
const router = express.Router();

router.use('/highline',highlineRouter)
router.use('/message',messageRouter)
router.use('/profile',profileRouter)
router.use('/cards',cardsRouter)
router.use('/request',requestRouter)


module.exports = router;