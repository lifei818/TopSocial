const axios = require('axios')

// get card by id
const getCardById = async function(req,res){
    const{id}=req.query;;
    console.log('id',id)
    if(!id){
        return res.status(400).send('id is required')
    }
    try{
        const url = 'http://localhost:8000/cards?id=' + id;
        const card = await axios.get(url);
        console.log('card', card.data)
        res.status(200).json({
            msg:'get card succeed',
            data:card.data
        })
    } catch (error) {
        res.status(500).send('server error')
    }
};

// post a card
const postCard = async function(req,res){
    const newCard = req.body;
    console.log('newCard',newCard)//{}
    if(Object.keys(newCard).length===0){
        return res.status(400).send('card is required')
    }
    try{
    const url = 'http://localhost:8000/cards'
    await axios.post(url, newCard,{
        headers:{"Content-Type":"application/json"}
    })

    res.status(200).json({
        msg:'card is created'
    })
    } catch (error){
        res.status(400).send('server error')
    }
};

// delete card by id
const deleteCardById = async function(req,res){
    const id = req.params.card_id
    try{
        const url = 'http://localhost:8000/cards/3' + id;
        const result = await axios.delete(url)
        console.log('res',res)
        res.status(200).json({
            msg:'card is deleted'
        })

    } catch (error){
        res.status(500).send('server error')
    }
};

module.exports = {getCardById, postCard, deleteCardById}