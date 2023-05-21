const express = require('express');
const axios = require('axios');

// create router
const router = express.Router();

// "/api/profile": get profile
// http://localhost/api/profile
router.get('/profile', async function (req,res){
    try{
        const url = 'http://localhost:8000/profile'
        const profile = await axios.get(url);
        console.log('profile', profile);
        res.status(200).json({
            msg:'get profile succeed',
            data: profile.data,
        });
    } catch(error){
        res.status(500).send('server error');
    }
});

// "/api/highline": get highline
// http://localhost/api/highline
// http://localhost:8000/highline
router.get('/highline',async function(req,res){
    try{
    const url = 'http://localhost:8000/highline';
    const highline = await axios.get(url);
    res.status(200).json({
        msg:'get highline succeed',
        data:{
            highline:highline.data,
        }
    });
    }catch(error){
        res.status(500).send('sever error')
    }
});


// "/api/message": get message
// http://localhost/api/message
// http://localhost:8080/message 

// "/api/request": get request
// http://localhost/api/request

// "/api/cards?id=1": get card which id=1
// http://localhost/api/cards?id=1

// "/api/cards": post a card
// http://localhost/api/cards

// "/api/cards/:card_id": delete card by id
// http://localhost/api/card/:card_id



module.exports = router;